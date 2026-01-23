@echo off
echo ========================================
echo Initialisation du depot Git
echo ========================================
echo.

echo Initialisation de Git...
git init
if %errorlevel% neq 0 (
    echo ERREUR: Git n'est pas installe ou n'est pas dans le PATH
    pause
    exit /b 1
)

echo.
echo Ajout des fichiers...
git add .

echo.
echo Creation du commit initial...
git commit -m "Initial commit: Portfolio BTS SIO SISR"

echo.
echo ========================================
echo Depot Git initialise avec succes !
echo ========================================
echo.
echo Prochaines etapes :
echo 1. Creez un nouveau depot prive sur GitHub
echo 2. Executez les commandes suivantes :
echo.
echo    git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git
echo    git branch -M main
echo    git push -u origin main
echo.
pause
