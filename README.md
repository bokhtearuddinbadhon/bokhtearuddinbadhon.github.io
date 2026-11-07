# Bokhtear Uddin Badhon — Engineering Portfolio

Live site: <https://bokhtearuddinbadhon.github.io/>

A static portfolio for mechanical engineering projects, technical skills, education, and experience.

## How the site is built

- `index.html` contains the home page and its About, Education, Experience, Skills, Projects, and Contact sections.
- `style.css` contains the shared visual design and responsive layout rules.
- `script.js` handles interactive behavior, the contact form request, and project data used by the home page.
- Standalone HTML pages provide project and skill details, including `cad-design.html`, `fusion-360.html`, `hook-fea.html`, and `hook-static-stress.html`.
- Images, PDFs, and video files in the repository are static portfolio assets.

The site uses plain HTML, CSS, and JavaScript. There is no package manager, build command, or server-side application in this repository. Font Awesome is loaded from a CDN.

## Run locally

Open `index.html` in a browser, or serve the repository directory with a local static server. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000/>.

## Deployment

The repository is published with GitHub Pages from its configured publishing source. The site is static, so it does not require a build step. Push changes to the configured branch/source and check the repository's Actions or Pages deployment status before relying on the live update.

## Contact form

The contact form is in `index.html`; its submission handler is in `script.js`. It sends the visitor's name, email address, subject, and message to Formspree using a form endpoint ID. The form includes a hidden `_gotcha` honeypot field and displays success or error feedback in the page.

The endpoint ID is a public routing identifier, not a secret: browser-side code is visible to every site visitor. Never place passwords, private API tokens, Formspree account credentials, or other secrets in HTML, CSS, JavaScript, or any other public file. For an integration that requires a private credential, use a server-side service and store the credential in that service's environment or secret manager.

Check the Formspree account dashboard for spam controls, authorized domains, and the current submission allowance. The correct allowed domain for this site is `bokhtearuddinbadhon.github.io`.

## Keeping local credentials out of Git

The root `.gitignore` excludes common local environment files and private key/credential files. Ignore rules only prevent future untracked files from being added; they do not remove files already committed or revoke credentials. If a real secret is ever committed, revoke or rotate it immediately, then remove it from the repository/history as appropriate.
