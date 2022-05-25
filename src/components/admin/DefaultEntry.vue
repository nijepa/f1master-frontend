<template>
  <transition-group name="entry" mode="out-in" appear>
    <div class="backdrop" key="0"></div>
    <div class="entry-wrapper" v-click-outside="handleConfirm" key="1">
      <h2 class="entry-title">{{ title }}</h2>
      <div class="entry-li">
        <template v-for="key in model" :key="key.name">
          <template class="" v-if="key.type === 'date'">
            <label :for="key.name">{{ key.name }}</label>
            <Datepicker
              :id="key.name"
              v-model="modelData[key.name]"
              dark
            ></Datepicker>
          </template>
          <template class="" v-else-if="key.type === 'select'">
            <label :for="key.name">{{ key.name }}</label>
            <select v-model="modelData[key.name]" class="round">
              <option
                v-for="item in teams"
                :key="item.id"
                :value="item.teamName"
              >
                {{ item.teamName }}
              </option>
            </select>
          </template>
          <template class="" v-else>
            <label :for="key.name">{{ key.name }}</label>
            <DefaultInput
              :id="key.name"
              v-model="modelData[key.name]"
              :input-type="key.type"
              :disabled="key.readonly"
              :class="key.readonly ? 'readonly' : ''"
            />
          </template>
        </template>
      </div>
      <ConfirmGroup
        :title-yes="'save'"
        :title-no="'cancel'"
        :direction="true"
        @reseted="handleConfirm"
        @confirmed="handleConfirm(false)"
      />
    </div>
  </transition-group>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import DefaultInput from "@/components/admin/DefaultInput.vue";
import ConfirmGroup from "@/components/admin/ConfirmGroup.vue";
import { reactive, ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "List",
  components: {
    DefaultInput,
    Datepicker,
    ConfirmGroup,
  },
  props: {
    dataModel: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    listClass: {
      type: Number,
      default: 4,
    },
  },
  emits: ["canceled", "finished"],

  setup(props, { emit }) {
    const store = useStore();

    const teams = computed(() => store.getters.getF1datas("teams"));
    const model = ref(props.dataModel.slice(1, props.dataModel.length));
    const res = props.dataModel
      .map((p) => p.name)
      .slice(1, props.dataModel.length)
      .reduce((acc, key) => ((acc[key] = ""), acc), {});
    const modelData = reactive(res);

    const handleConfirm = (entryData = true) => {
      if (!entryData) {
        const isEmpty = Object.values(modelData).every(
          (x) => x === null || x === ""
        );
        if (!isEmpty) {
          emit("finished", modelData);
          return;
        }
      }
      emit("finished");
    };

    const fieldsClass = computed(() => {
      return props.listClass === 4 ? "entry-four" : "entry-five";
    });

    return {
      teams,
      model,
      modelData,
      fieldsClass,
      handleConfirm,
    };
  },
};
</script>

<style lang="scss" scoped>
.backdrop::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background-color: rgba(11, 31, 42, 0.7);
  width: 100%;
  height: 100%;
  z-index: 10;
}
.entry-wrapper {
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  background-color: $mercedes-silver;
  padding: 1em;
  border-radius: 0.2em;
  box-shadow: 0px 0px 3px $haas;

  .entry-title {
    margin: 0.5em 0;
    color: $grey;
    text-transform: uppercase;
    text-shadow: none;
  }

  .entry-li {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    column-gap: 1em;
    row-gap: 1em;

    label {
      text-align: right;
      color: $haas;
      text-transform: capitalize;
    }

    .entry-item {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .entry-heading {
        font-variant: small-caps;
        margin-bottom: 0.5em;
        color: $alphatauri;
        cursor: pointer;
        transition: all 0.4s ease;
      }

      .entry-heading:hover {
        color: $yellow;
      }
    }
  }
}
.entry-enter-from {
  opacity: 0;
  transform: scale(0.2);
}
.entry-enter-active {
  transition: all 0.4s ease-out;
}
.entry-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
.entry-enter-active {
  transition: all 0.4s ease-in;
}
select {
  font-family: "Play", cursive;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  background: rgba(16, 16, 16, 0.502);
  color: white;
  font-weight: bold;
  border: 2px solid transparent;
  padding: 1em;
  letter-spacing: 1.5px;

  option {
    background: #070707;
    font-weight: bold;
    color: #ccc;
  }
}
</style>
