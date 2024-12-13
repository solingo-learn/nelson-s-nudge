# 🫵 Nelson's Nudge

Nelson's Nudge est un assistant conversationnel alimenté par l'IA qui analyse les tokens et memecoins Solana avec un sens de l'humour unique inspiré de Nelson Muntz des Simpsons.

## 🎯 Fonctionnalités

- **Analyse de tokens Solana** : Entrez un nom de token, une adresse de contrat ou décrivez un lancement de memecoin
- **Interface de chat intuitive** : Interface utilisateur moderne et réactive construite avec React et Tailwind CSS
- **Réponses en streaming** : Obtenez des réponses en temps réel grâce au streaming de l'IA
- **Analyse perspicace** : Nelson fournit des analyses humoristiques mais informatives des projets crypto

## 🚀 Technologies utilisées

- **Frontend** : React 18, TypeScript, Vite
- **UI/UX** : Tailwind CSS, shadcn/ui, Lucide React
- **Backend** : Supabase Edge Functions
- **État** : React Query (@tanstack/react-query)
- **Formulaires** : React Hook Form avec Zod validation
- **Markdown** : React Markdown pour le rendu des messages

## 📦 Installation

```sh
# Cloner le dépôt
git clone https://github.com/VOTRE_USERNAME/nelson-s-nudge.git

# Naviguer dans le répertoire du projet
cd nelson-s-nudge

# Installer les dépendances
npm install

# Créer un fichier .env avec vos variables d'environnement
# Voir .env.example pour la structure requise
cp .env.example .env

# Démarrer le serveur de développement
npm run dev
```

## 🔧 Configuration

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
VITE_SUPABASE_PROJECT_ID=votre_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=votre_publishable_key
VITE_SUPABASE_URL=votre_supabase_url
```

## 📝 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm test` : Lance les tests
- `npm run test:watch` : Lance les tests en mode watch

## 🎨 Composants UI

Le projet utilise une bibliothèque complète de composants UI basés sur Radix UI et shadcn/ui :

- Accordéon, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu, Form
- Input, Label, Select
- Tabs, Toast, Tooltip
- Et bien d'autres...

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## ⚠️ Avertissement

Cet outil est à des fins éducatives et de divertissement. Ne prenez pas de décisions d'investissement basées uniquement sur les analyses fournies. Faites toujours vos propres recherches (DYOR) avant d'investir dans les cryptomonnaies.

---

Construit avec ❤️ pour la communauté crypto Solana
