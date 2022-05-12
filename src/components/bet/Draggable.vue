<template>
  <div>
    <div>
      <ConfirmGroup @reseted="sort" @confirmed="handleConfirmation" />
    </div>
    <h1>Race</h1>
    <div class="drag">
      <ul class="list-group">
        <li v-for="nr in list.length" :key="nr" class="list-group-number">
          <span :class="nr > 10 && 'last-ten'">{{ nr }}</span>
        </li>
      </ul>

      <draggable
        class="list-group"
        item-key="order"
        tag="transition-group"
        :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
        v-model="list"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <template #item="{ element }">
          <li class="list-group-item">
            <!-- <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i> -->
            <span class="nr">#{{ element.name.nr }}</span>
            {{ element.name.n }}
            <span class="team" :class="teamName(element.name.t)"
              >{{ element.name.t }}
            </span>
            <!-- <Logo :name="teamName(element.name.t)" alt="" /> -->
          </li>
        </template>
      </draggable>
    </div>
    {{ list }}
    <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
  </div>
</template>

<script>
//import Logo from "@/components/Logo.vue";
import ConfirmGroup from "../admin/ConfirmGroup.vue";
import draggable from "vuedraggable";
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];
let order = message.length;
export default {
  name: "transition-example",
  display: "Transition",
  order: 6,
  components: {
    draggable,
    //Logo,
    ConfirmGroup,
  },
  data() {
    return {
      // list: message.map((name, index) => {
      //   return { name, order: index + 1 };
      // }),
    };
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  setup() {
    const store = useStore();
    const drivers = computed(() => store.getters.getF1datas("drivers"));
    const teamName = (team) => {
      return team.toLowerCase().replace(/\s/g, "");
    };
    const loadImg = (img) => {
      const im = teamName(img);
      const path = `@/assets/images/teams/${im}.svg`;
      return require(path);
    };
    const listo = drivers.value.map((name, index) => {
      return {
        name: {
          n: name.name,
          nr: name.number,
          t: name.team,
        },
        order: index + 1,
      };
    });
    const list = ref([...listo]);
    return { drivers, list, teamName, loadImg };
  },
};
</script>

<style lang="scss">
h1 {
  text-transform: uppercase;
  color: $mercedes;
  margin: 0.5em;
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.drag {
  display: flex;
  justify-content: center;
}
.list-group {
  min-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
}
.list-group-item {
  cursor: move;
  padding: 0.5em;
  color: black;
  background-color: $mercedes;
  margin: 0.2em;
  border-radius: 4px;
  width: 17em;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  justify-content: flex-start;

  .nr {
    background-color: black;
    color: $mercedes;
    border-radius: 4px;
  }

  .team {
    justify-self: flex-end;
    border-radius: 4px;
  }
}
.list-group-item i {
  cursor: pointer;
}
.list-group-number {
  padding: 0.7em;
  background-color: transparent;
  color: $yellow;
  margin: 0.2em;
  border-radius: 4px;
  width: 2em;
}
.nr {
  padding: 0.2em;
  background-color: $yellow;
  margin-right: 0.5em;
}
.team {
  background-color: $red;
  padding: 0.2em;
  color: $yellow;
  margin-left: 0.5em;
}
.ferrari {
  background-color: $ferrari-red;
}
.mercedes {
  background-color: $mercedes-silver;
}
.redbull {
  background-color: $redbull;
}
.mclaren {
  background-color: $mclaren-orange;
}
.alpine {
  background-color: $alpine;
}
.alphatauri {
  background-color: $alphatauri;
}
.astonmartin {
  background-color: $astonmartin;
}
.williams {
  background-color: $williams;
}
.alfaromeo {
  background-color: $alfaromeo;
}
.haas {
  background-color: $haas;
}
.last-ten {
  color: $red;
}
</style>
