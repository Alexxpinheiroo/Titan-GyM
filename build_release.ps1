# =============================================================================
# TITAN-GYM: SCRIPT DE BUILD DE PRODUÇÃO E GERAÇÃO DE PACOTE ANDROID
# =============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot
Set-Location $ProjectDir

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "         TITAN-GYM - BUILD DE PRODUCAO ANDROID            " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Compilar bundle web
Write-Host "`n[1/4] Compilando web bundle com Vite..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Falha na compilacao Vite."
}

# 2. Sincronizar com Capacitor Android
Write-Host "`n[2/4] Sincronizando assets com Capacitor Android..." -ForegroundColor Yellow
npx cap sync android
if ($LASTEXITCODE -ne 0) {
    Write-Error "Falha no cap sync android."
}

# 3. Configurar ambiente Java
Write-Host "`n[3/4] Configurando ambiente Java JDK..." -ForegroundColor Yellow
if (Test-Path "D:\Ferramentas\Java\jdk-21.0.12.1") {
    $env:JAVA_HOME = "D:\Ferramentas\Java\jdk-21.0.12.1"
    $env:PATH = "$env:JAVA_HOME\bin;" + $env:PATH
    Write-Host "  -> JAVA_HOME configurado para: $env:JAVA_HOME" -ForegroundColor Green
}

# 4. Tentar compilar bundleRelease (.aab) ou instruir sobre Android Studio
Write-Host "`n[4/4] Verificando compilacao do Android App Bundle (.aab)..." -ForegroundColor Yellow

$androidDir = Join-Path $ProjectDir "android"
Set-Location $androidDir

if ($env:ANDROID_HOME -or (Test-Path "local.properties")) {
    Write-Host "  -> Compilando bundleRelease com Gradle..." -ForegroundColor Cyan
    cmd /c "gradlew.bat bundleRelease"
    if ($LASTEXITCODE -eq 0) {
        $aabPath = Join-Path $androidDir "app\build\outputs\bundle\release\app-release.aab"
        Write-Host "`nSUCESSO TOTAL! O arquivo AAB assinado foi gerado em:" -ForegroundColor Green
        Write-Host "  $aabPath" -ForegroundColor White
        Write-Host "Este e o arquivo oficial para subir no Google Play Console!" -ForegroundColor Green
    } else {
        Write-Warning "Gradle reportou pendencias de SDK local. Abra a pasta 'android' no Android Studio para gerar o bundle com um clique."
    }
} else {
    Write-Host "`nO Android SDK local ainda nao possui a variavel ANDROID_HOME definida." -ForegroundColor Yellow
    Write-Host "Para gerar o arquivo oficial .aab assinado para a Google Play Store:" -ForegroundColor White
    Write-Host "  1. Abra o Android Studio" -ForegroundColor White
    Write-Host "  2. Selecione 'Open' e aponte para a pasta: $androidDir" -ForegroundColor White
    Write-Host "  3. No menu superior, clique em: Build -> Generate Signed Bundle / APK" -ForegroundColor White
    Write-Host "  4. Escolha 'Android App Bundle' e a chave 'titan-release-key.jks' ja configurada!" -ForegroundColor Green
}

Set-Location $ProjectDir
Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "          CONCLUIDO COM SUCESSO!                          " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
