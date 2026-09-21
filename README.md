# 🎓 TechCourses — Web App com Apache + Docker

Esse é uma Aplicação web modelo estática de **cursos de tecnologia**, servida por um container **Apache HTTP Server** orquestrado via **Docker Compose**.
Esse foi um exercicío proposto pelo modulo **Formação Docker Fundamentals** "_DIO_"
Abaixo, explicação sobre a estrutura e implantação para o projeto modelo.

---

## 📁 Estrutura do Projeto

```
container_app_web/
├── docker-compose.yml          # Orquestração do container Apache
├── Dockerfile                  # Imagem Apache 2.4 (Alpine) personalizada
├── README.md
└── html/                       # Raiz do servidor web (htdocs)
    ├── index.html              # Página inicial
    ├── cursos.html             # Listagem de todos os cursos com filtros
    ├── sobre.html              # Sobre a plataforma e equipe
    ├── css/
    │   └── style.css           # Folha de estilos completa
    └── js/
        └── main.js             # Lógica: dados, renderização, filtros, busca
```

---

## 🚀 Como rodar

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### 1. Build e start

```bash
docker compose up --build -d
```

### 2. Acessar no navegador

```
http://localhost:8080
```

### 3. Parar o container

```bash
docker compose down
```

### 4. Ver logs

```bash
docker compose logs -f
```

---

## 🌐 Páginas da aplicação

| Página | URL | Descrição |
|---|---|---|
| Início | `http://localhost:8080/` | Hero, categorias, cursos em destaque, depoimentos |
| Cursos | `http://localhost:8080/cursos.html` | Todos os cursos com filtro por área e busca |
| Sobre | `http://localhost:8080/sobre.html` | Missão, números e equipe |

---

## 🛠 Tecnologias

| Camada | Tecnologia |
|---|---|
| Web Server | Apache HTTP Server 2.4 (Alpine) |
| Container | Docker + Docker Compose |
| Frontend | HTML5 + CSS3 + JavaScript (Vanilla) |
| Imagens demo | SVGs inline gerados dinamicamente |

---

## 📦 Detalhes do container

- **Imagem base:** `httpd:2.4-alpine` (leve, ~60MB)
- **Porta:** `8080` no host → `80` no container
- **Volume:** `./html` mapeado para `/usr/local/apache2/htdocs/`
- **Módulos ativos:** `mod_rewrite`, `mod_deflate`, `mod_headers`
- **Restart policy:** `unless-stopped`

---

## ✨ Features da aplicação

- **14 cursos** em 5 áreas: Programação, Cloud & DevOps, Data Science, Segurança, Mobile
- Filtros por categoria e busca em tempo real (página de Cursos)
- Contadores animados na hero section
- Cards com thumbnails SVG gerados dinamicamente
- Toast de feedback ao clicar em um curso
- Design responsivo (mobile-friendly)
- Menu hambúrguer em telas pequenas

---

## 🔄 Desenvolvimento local (sem Docker)

Basta abrir `html/index.html` diretamente no navegador, ou usar qualquer servidor HTTP local:

```bash
# Python
python3 -m http.server 8080 --directory html

# Node (npx serve)
npx serve html -p 8080
```
