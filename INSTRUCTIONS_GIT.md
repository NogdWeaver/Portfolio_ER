# Instructions pour créer un dépôt Git privé et pousser le projet

## 📋 Étapes à suivre

### 1. Initialiser le dépôt Git local

Ouvrez PowerShell dans le dossier du projet et exécutez :

```powershell
# Option 1 : Utiliser le script automatique
.\setup-git.ps1

# Option 2 : Commandes manuelles
git init
git add .
git commit -m "Initial commit: Portfolio BTS SIO SISR"
```

### 2. Configurer Git (si pas déjà fait)

```powershell
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### 3. Créer un dépôt privé sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `portfolio-bts-sio-sisr` (ou le nom de votre choix)
   - **Description** : "Portfolio statique BTS SIO Option SISR"
   - **Visibilité** : Sélectionnez **"Private"** 🔒
   - **Ne cochez PAS** "Initialize this repository with a README" (on a déjà un README)
4. Cliquez sur **"Create repository"**

### 4. Connecter le dépôt local à GitHub

GitHub vous donnera des instructions après la création. Exécutez ces commandes dans PowerShell :

```powershell
# Remplacez USERNAME et REPO_NAME par vos valeurs
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Exemple concret :**
```powershell
git remote add origin https://github.com/votre-username/portfolio-bts-sio-sisr.git
git branch -M main
git push -u origin main
```

### 5. Authentification GitHub

Lors du `git push`, GitHub vous demandera de vous authentifier :

**Option A - Token d'accès personnel (recommandé) :**
1. Allez dans GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Cliquez sur "Generate new token (classic)"
3. Donnez un nom au token et sélectionnez les permissions `repo`
4. Copiez le token généré
5. Utilisez-le comme mot de passe lors du push

**Option B - GitHub CLI :**
```powershell
# Installer GitHub CLI si nécessaire
winget install GitHub.cli

# Se connecter
gh auth login

# Puis faire le push
git push -u origin main
```

## 🔄 Commandes Git utiles pour la suite

```powershell
# Voir l'état des fichiers
git status

# Ajouter des fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser vers GitHub
git push

# Voir l'historique des commits
git log

# Voir les remotes configurés
git remote -v
```

## ✅ Vérification

Une fois le push terminé, allez sur votre dépôt GitHub. Vous devriez voir tous vos fichiers :
- index.html
- experience.html
- projets.html
- cv.html
- contact.html
- styles.css
- script.js
- README.md
- .gitignore

## 🆘 En cas de problème

**Erreur "remote origin already exists" :**
```powershell
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```

**Erreur d'authentification :**
- Vérifiez que votre token GitHub est valide
- Utilisez GitHub CLI : `gh auth login`

**Erreur "branch main does not exist" :**
```powershell
git branch -M main
# ou
git checkout -b main
```
