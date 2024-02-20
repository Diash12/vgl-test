<template>
  <div class="w-full">
    <div class="m-auto flex w-60 text-center border mt-40">
      <label for="providedRating" class="w-full border">Type Rating</label>
      <input
        type="number"
        id="providedRating"
        class="border text-center w-full"
        v-model="providedRating"
      />
    </div>
    <div>
      <div
        :class="{
          'border-red-500': providedRating < 70,
          'border-blue-300': providedRating >= 70,
        }"
        class="border-2 flex-col justify-between w-96 m-auto mt-10 max-h-96"
      >
        <div
          :style="{
            color: providedRating < 70 ? 'rgba(219,0,0,255)' : '#000',
            'background-color':
              providedRating < 70 ? 'rgba(219,0,0,255)' : 'rgba(2,152,213,1)',
          }"
          class="text-center font-bold pt-4 items-center m-auto uppercase h-14"
        >
          <p class="text-white">auszeichnung</p>
        </div>
        <div class="text-center pt-6">
          <p>Unsere Bewertung</p>
        </div>
        <div
          :style="{
            color:
              providedRating < 70 ? 'rgba(219,0,0,255)' : 'rgba(2,152,213,1)',
          }"
          class="text-center mt-10 text-3xl"
        >
          <p>{{ convertedGrade }}</p>
        </div>
        <div
          class="border-t border-gray-300 mt-14 h-10 text-center pt-2 bg-gray-100"
        >
          <p>02/2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const providedRating = ref(0);
const convertedGrade = ref("");

const convertRating = () => {
  const rating = providedRating.value;

  switch (true) {
    case rating >= 90 && rating <= 100:
      convertedGrade.value = "Sehr Gut";
      break;
    case rating >= 70 && rating < 90:
      convertedGrade.value = "Gut";
      break;
    case rating >= 50 && rating < 70:
      convertedGrade.value = "Befriedigend";
      break;
    case rating >= 30 && rating < 50:
      convertedGrade.value = "Ausreichend";
      break;
    case rating >= 20 && rating < 30:
      convertedGrade.value = "Mangelhaft";
      break;
    case rating >= 0 && rating < 20:
      convertedGrade.value = "Ungenügend";
      break;
    default:
      convertedGrade.value = "Invalid Rating";
  }
};

watchEffect(() => {
  convertRating();
});
</script>
