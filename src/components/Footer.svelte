<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import resume from '$data/resume.json';
  import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
  import networkTypes from '$data/networkTypes.js'
</script>

<footer
  class="print:hidden main shadow-2xl py-32 z-50 bg-gray-50 dark:bg-gray-700 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
>
  <ul data-aos="fade-down" class="flex item-center justify-center gap-6 mb-8">
    {#each resume.basics.profiles as profile}
      <li class="m-0">
        <a
                title={profile.meta.buttonLabel}
                aria-label={profile.meta.buttonLabel}
                href={profile.url}
                target="_blank"
                class="nav-text p-1"
                rel="me"
        >
          <FontAwesomeIcon icon={networkTypes[profile.network]} size="lg"/></a>
      </li>
    {/each}
    <li class="m-0">
      <a
        id="email"
        title="Send me an email"
        aria-label="Send me an email"
        href="mailto:sydney.panear[atg]mx.at?subject=Website%2FResum%C3%A9%2FCV&body=Hi%20there%20Sydney%2C%20I%20just%20saw%20your%20site..."
        target="_blank"
        class="nav-text p-1"
        rel="me"
      >
        <FontAwesomeIcon icon="{faEnvelope}" size="lg"/></a>
    </li>
  </ul>

  <div class="text-center dark:text-white">
       &copy; <time>2024</time> Sydney Panesar
  </div>
</footer>
