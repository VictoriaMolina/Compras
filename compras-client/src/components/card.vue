<template>
  <div>
    <b-card
      border-variant="secondary"
      :header="cardHeader"
      header-border-variant="secondary"
      align="center"
      class="mb-4"
    >
      <b-card-text>{{ cardText }}</b-card-text>
      <b-card-text>{{ cardDescription }}</b-card-text>
      <b-card-text>{{ cardItem }}</b-card-text>
      <slot></slot>
      <b-button
        v-if="needDelete"
        class="mr-3"
        variant="outline-danger"
        v-on:click="buttonFunction"
      >
        {{ buttonText }}</b-button
      >

      <b-button
        v-if="needEdit"
        v-on:click="editEvent"
        class="mr-3"
        variant="outline-success"
        v-b-toggle.sidebar-1
        >Edit</b-button
      >
    </b-card>
  </div>
</template>

<script>
import EventBus from "@/pluggins/eventBus";

export default {
  name: "card",
  props: {
    cardHeader: String,
    cardDescription: String,
    cardItem: String,
    cardText: String,
    needDelete: {
      type: Boolean,
      default: false,
    },
    cardId: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    needText: {
      type: Boolean,
      default: false,
    },
    needEdit: {
      type: Boolean,
      default: false,
    },
    editText: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonFunction() {
      this.$emit("cardEvent", this.cardId);
    },
    editEvent() {
      const data = {
        cardId: this.cardId,
      };
      console.log(this.cardId);
      EventBus.$emit("EditEvent", data);
    },
    deleteEvent() {
      const data = {
        cardId: this.cardId,
      };
      console.log(this.cardId);
      EventBus.$emit("deleteEvent", data);
    }
  },
};
</script>

<style scoped></style>
