# Script PowerShell pour initialiser Git et préparer le push
# Exécutez ce script dans PowerShell : .\setup-git.ps1

Write-Host "Initialisation du dépôt Git..." -ForegroundColor Green

# Initialiser Git
git init

# Configurer Git (remplacez par vos informations si nécessaire)
Write-Host "Configuration Git..." -ForegroundColor Yellow
Write-Host "Si vous n'avez pas encore configuré Git globalement, utilisez :"
Write-Host "git config --global user.name 'Votre Nom'"
Write-Host "git config --global user.email 'votre.email@example.com'"

# Ajouter tous les fichiers
Write-Host "Ajout des fichiers..." -ForegroundColor Green
git add .

# Créer le commit initial
Write-Host "Création du commit initial..." -ForegroundColor Green
git commit -m "Initial commit: Portfolio BTS SIO SISR"

Write-Host ""
Write-Host "✅ Dépôt Git initialisé avec succès !" -ForegroundColor Green
Write-Host ""
Write-Host "Prochaines étapes :" -ForegroundColor Yellow
Write-Host "1. Créez un nouveau dépôt privé sur GitHub"
Write-Host "2. Exécutez les commandes suivantes :"
Write-Host ""
Write-Host "   git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git"
Write-Host "   git branch -M main"
Write-Host "   git push -u origin main"
Write-Host ""
