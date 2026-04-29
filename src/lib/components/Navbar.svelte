<!-- MENU DE NAVIGATION -->

<script>
  export let links = [
    { label: "Accueil", href: "/" },
    { label: "Carte interactive", href: "/folium" },
    { label: "A propos", href: "/apropos" },
  ];

  export let siteName = ".";
  export let ctaLabel = "Contact";
  export let ctaHref = "/contact";

  let currentPath = "/";

  function isActive(href) {
    return currentPath === href;
  }
</script>

<nav>
  <a class="logo" href="/" style="visibility : hidden;">
    {siteName}
  </a>

  <ul class="nav-links">
    {#each links as { label, href }}
      <li>
        <a {href} class:active={isActive(href)}>
          {label}
        </a>
      </li>
    {/each}
  </ul>

  <a class="cta" href={ctaHref} style="visibility : hidden;">
    {ctaLabel}
  </a>
</nav>

<style>
  nav {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    position: fixed;
    z-index: 10000;
    width: 100%;
    top:0px;
    justify-content: space-between;
    height: 64px;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    margin-top: 0px;
  }
  .nav-links {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .nav-links a {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    color: #6f6056;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 6px;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .nav-links a:hover {
    font-weight : bold;
    background-color: #f3f4f6;
    color: #6f6056;
  }
</style>