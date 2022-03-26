<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <router-link class="logo" to="/"></router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <div
          v-for="(link, i) in links.groupedLinks"
          :key="i"
          class="navigation-sub"
        >
          <router-link :to="link.to" class="link">{{ link.title }}</router-link>
        </div>
        <router-link
          class="link nav-link nav-link1"
          :to="links.leftLink.to"
          active-class="active"
          >{{ links.leftLink.title }}</router-link
        >
        <router-link
          class="link nav-link nav-link2"
          :to="links.rightLink.to"
          active-class="active2"
          >{{ links.rightLink.title }}</router-link
        >
      </ul>
      <div class="icon">
        <svg
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 335.841 335.841"
          style="enable-background: new 0 0 335.841 335.841"
          xml:space="preserve"
          fill="white"
          width="30px"
        >
          <path
            d="M331.947,226.808l-1.932-5.573c-1.31-3.778-2.823-7.482-4.532-11.097L306.735,170.5l-25.861-54.679
		c-1.656-3.501-3.447-6.939-5.387-10.291c-0.69-1.193-1.312-2.233-1.653-2.718c-25.83-36.785-75.364-58.221-137.009-59.039
		c-0.608-0.009-1.205-0.013-1.811-0.013c-73.817,0-134.382,59.207-135.009,131.982c-0.364,42.22,19.624,82.54,53.467,107.858
		c7.311,5.469,16.443,8.48,25.715,8.48h223.812c13.745,0,26.062-9.207,29.952-22.39C337.12,255.559,336.773,240.731,331.947,226.808
		z M314.197,215.295h-19.735l-43.618-87.761h21.892c0.018,0.042,0.041,0.093,0.058,0.133l0.084,0.201L314.197,215.295z
		 M173.498,127.877l39.437,79.33c-7.852-3.842-15.105-8.985-21.465-15.35c-15.112-15.111-23.436-35.203-23.436-56.573
		C168.034,131.804,170.338,128.854,173.498,127.877z M230.509,213.356l-42.664-85.821h22.982l43.628,87.761h-6.411
		C242.069,215.295,236.202,214.622,230.509,213.356z M268.972,215.295l-43.628-87.761h10.983l43.618,87.761H268.972z
		 M320.481,266.012c-2.271,7.695-9.46,13.069-17.483,13.069H79.187c-6.483,0-12.85-2.092-17.928-5.891
		c-30.543-22.85-48.583-59.237-48.254-97.337C13.57,110.186,68.303,56.76,135.014,56.76c0.548,0,1.088,0.004,1.638,0.011
		c59.62,0.791,106.684,21.727,129.163,57.449c0.053,0.096,0.116,0.209,0.174,0.314h-90.214c-11.436,0-20.74,9.309-20.74,20.75
		c0,24.843,9.675,48.199,27.242,65.765c17.559,17.57,40.916,27.246,65.768,27.246h70.66l0.96,2.771
		C323.597,242.411,323.88,254.495,320.481,266.012z"
          />
          <path
            d="M128.605,135.536c-11.854,0-21.499,9.645-21.499,21.499s9.645,21.499,21.499,21.499c11.855,0,21.5-9.645,21.5-21.499
		S140.46,135.536,128.605,135.536z M128.605,165.534c-4.687,0-8.499-3.813-8.499-8.499s3.813-8.499,8.499-8.499s8.5,3.813,8.5,8.499
		S133.292,165.534,128.605,165.534z"
          />
        </svg>
      </div>
      <transition name="mobile-nav">
        <ul
          v-if="mobileNav"
          v-click-outside="clickOutside"
          class="dropdown-nav"
        >
          <router-link
            @click="mobileNav = false"
            class="link nav-link nav-link1"
            active-class="active"
            :to="links.leftLink.to"
            >{{ links.leftLink.title }}</router-link
          >
          <div class="dropdown__sub-nav">
            <div v-for="(link, i) in links.groupedLinks" :key="i">
              <router-link
                @click="mobileNav = false"
                class="link"
                :to="link.to"
                >{{ link.title }}</router-link
              >
            </div>
          </div>
          <router-link
            @click="mobileNav = false"
            active-class="active2"
            class="link nav-link nav-link2"
            :to="links.rightLink.to"
            >{{ links.rightLink.title }}</router-link
          >
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
import navigation from "@/config/navigation";
import {
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  onMounted,
  onUnmounted,
} from "vue";
import { useOnResize } from "vue-composable";
import { useRoute } from "vue-router";
export default {
  name: "Navbar",
  props: {
    navName: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const links = ref(navigation[props.navName]);

    const route = useRoute();
    const routeName = computed(() => route.name);

    const { width } = useOnResize(document.body);
    const state = reactive({
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
    });

    let scrollPosition = computed(() => window.screenY);
    const updateScroll = () => {
      onScrollChange();
      if (scrollPosition.value > 50) {
        state.scrolledNav = true;
        return;
      }
      state.scrolledNav = false;
    };

    const toggleMobileNav = () => {
      state.mobileNav = !state.mobileNav;
    };

    const clickOutside = () => {
      state.mobileNav = false;
    };

    const checkWidth = () => {
      if (width.value <= 800) {
        state.mobile = true;
        return;
      }
      state.mobile = false;
      state.mobileNav = false;
      return;
    };

    watch(
      () => width.value,
      () => {
        checkWidth();
      }
    );

    watch(
      () => routeName.value,
      () => {
        checkWidth();
      },
      { immediate: true }
    );

    const onScrollChange = () =>
      (scrollPosition.value = document.body.scrollTop);
    onMounted(() => window.addEventListener("scroll", updateScroll));
    onUnmounted(() => window.removeEventListener("scroll", updateScroll));

    return { links, ...toRefs(state), toggleMobileNav, clickOutside, width };
  },
};
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(#000 2%, #0a0a0a 52%, #000);
  box-shadow: 2px 0px 1px $mercedes-silver;
  z-index: 9;
  width: 100%;
  position: sticky;
  top: 0;
  transition: 0.5s ease all;
  color: $grey;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 992px;
    }

    ul,
    .link {
      font-weight: 500;
      color: $grey;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      display: block;
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;

      &:hover {
        color: $haas-light;
        text-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
      }
    }

    .navigation a.router-link-active {
      color: $yellow;
      transition: 0.4s;
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: space-evenly;
      column-gap: 1em;

      .navigation-sub {
        display: flex;
        column-gap: 1em;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      svg {
        cursor: pointer;
        transition: 0.8s ease all;
        fill: $alphatauri;

        &:hover {
          fill: $mclaren;
        }
      }
    }

    .icon-active {
      transform: rotate(-90deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      padding: 2em 1em 1em 1em;
      row-gap: 1em;
      width: 100%;
      max-width: 200px;
      height: 100%;
      max-height: 480px;
      background-color: rgba(11, 31, 42, 0.8);
      border-bottom-right-radius: 2em;
      top: 0;
      left: 0;

      .dropdown__sub-nav {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      }

      .link {
        min-width: 100px;
        padding: 1em;
        background-color: $mercedes-silver;
        border-radius: 4px;
      }

      li {
        margin-left: 0;

        .link {
          color: #000;
        }
      }

      a:first-child {
        // margin-top: 2em;
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-active {
      transform: translateX(-200px) translateY(-350px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0) translateY(0);
    }
  }
}
.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      svg {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}

.logo {
  height: 30px;
  width: 110px;
  background: url("../assets/images/logo.png") center / contain no-repeat;
}

.nav-link {
  padding: 0.2em 1em;
  border-radius: 4px;
  font-family: "Play", cursive;
}

.nav-link1 {
  color: $ferrari-red !important;
  border: solid 1px $ferrari-red;
  background: rgba(255, 0, 0, 0.02);

  &.nav-link1:hover,
  &.nav-link1:active {
    color: white !important;
    background: $ferrari-red;
  }
}

.nav-link2 {
  color: $astonmartin !important;
  border: solid 1px $astonmartin;
  background: rgba(0, 128, 0, 0.02);

  &.nav-link.nav-link2:hover,
  &.nav-link.nav-link2 a.router-link-active {
    color: white !important;
    background: $astonmartin;
    border: solid 1px $astonmartin;
  }
}

.active {
  color: white !important;
  background: $ferrari-red;
}

.active2 {
  color: white !important;
  background: $astonmartin;
}
</style>
