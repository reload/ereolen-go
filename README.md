# 📚 eReolen Redirector

Dette projekt er bygget for at sikre, at gamle links til Ereolen GO materialer på den tidligere eReolen-platform stadig virker og sender brugeren det rigtige sted hen.

Den bruges f.eks. til at omskrive links fra `/ting/object/:id` til den "nye" struktur `/work/work-of::id`.

Siden kan ses her [https://reload.github.io/ereolen-go/](https://reload.github.io/ereolen-go/)

---

## ✍️ For redaktører

Teksteni på forsiden kan redigeres i filen [`content/main.html`](./content/main.html).

**Vigtigt:**  
Når du redigerer teksten, så sørg for **ikke at slette eller ændre HTML-tags** (som `<h1>`, `<p>`, `<a>` osv.). Kun selve teksten **inden i tags** må ændres.

Du må også gerne tilføje endnu et `<p>` tag i teksten, hvis du ønsker det, tekster skal bare være indenfor relevante HTML tags.

Et forkert eller manglende tag kan ødelægge opsætningen af siden – så tjek altid dine ændringer, før du publicerer.

---

## 👩‍💻 For udviklere

Start udviklingsserveren med:

```bash
yarn install && yarn dev
```

Siden vil være tilgængelig på [http://localhost:3000](http://localhost:3000).

**Byg & deployment:**
Denne applikation er en **statisk Next.js-side**, som bygges med `next build` og eksporteres med `next export`. Vi bruger ikke SSR eller API-routes.

Sitet bliver automatisk bygget og deployet til **GitHub Pages** via en GitHub Actions workflow.

🔗 [Se deployment-workflowet her](.github/workflows/deploy.yml)
📘 [Workflowet er taget fra dette repo](https://github.com/nextjs/deploy-github-pages)

I august 2026 blev de to sites redesignet for at passe med de nye brand-ændringer.
