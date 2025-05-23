# Stage 1: Build
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /app

# Configurações de encoding para evitar problemas com o application.properties
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

# Cache dependencies (otimização para builds mais rápidos)
COPY pom.xml .
RUN mvn dependency:go-offline -B -Dfile.encoding=UTF-8

# Build application
COPY src ./src
RUN mvn clean package -B -DskipTests -Dfile.encoding=UTF-8

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Configuração de usuário não-root para segurança
RUN useradd -m myuser && chown -R myuser:myuser /app
USER myuser

# Copy the built JAR (usando wildcard para evitar problemas com versões)
COPY --from=builder --chown=myuser:myuser /app/target/*.jar app.jar

# Configurações específicas para o Render
ENV JAVA_TOOL_OPTIONS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0 -Dfile.encoding=UTF-8"
ENV PORT=8080
EXPOSE $PORT

# Health check otimizado para o Render
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s \
  CMD curl -f http://localhost:$PORT/actuator/health || exit 1

# Entrypoint otimizado para containers
ENTRYPOINT ["java", "-jar", "app.jar"]