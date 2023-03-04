<template>
  <div class="home">
    <v-container fluid class="pa-8">
      <v-row class="">
        <v-col cols="12" md="6">
          <div class="main-q bord primary rounded">
            <div
              class="head secondary rounded rounded-b-0 pa-4 d-flex justify-center align-center"
            >
              <v-btn
                elevation="0"
                class="previous bord transparent white--text text-capitalize rounded-lg"
                @click="prev"
              >
                <v-icon color="white" size="25">mdi-chevron-left</v-icon>
                <span class="text-caption text-lg-body-2"> previous </span>
              </v-btn>
              <v-spacer></v-spacer>
              <span class="white--text"
                >Question {{ onboarding + 1 }} Of {{ questions.length }}
              </span>
              <v-spacer></v-spacer>
              <v-btn
                elevation="0"
                class="next support white--text text-capitalize rounded-lg"
                @click="next"
              >
                <span class="text-caption text-lg-body-2"> next </span>
                <v-icon color="white" size="25">mdi-chevron-right</v-icon>
              </v-btn>
            </div>
            <div class="questions bord primary px-4 py-6">
              <v-window v-model="onboarding" reverse>
                <v-window-item v-for="question in questions" :key="question.id">
                  <v-sheet class="content bord rounded pa-4">
                    <p>
                      {{ question.questionText }}
                    </p>
                  </v-sheet>
                  <div
                    class="mt-3"
                    v-if="
                      result.questionsResults.filter(
                        (x) => x.questionNum == onboarding + 1
                      )[0].result == 1
                    "
                  >
                    <v-icon color="green">mdi-check</v-icon>
                    <strong class="green--text mx-1 font-weight-bold"
                      >Correct Answer</strong
                    >
                  </div>
                  <div
                    class="mt-3"
                    v-if="
                      result.questionsResults.filter(
                        (x) => x.questionNum == onboarding + 1
                      )[0].result == 0
                    "
                  >
                    <v-icon color="error">mdi-close</v-icon>
                    <strong class="error--text mx-1 font-weight-bold"
                      >Incorrect Answer</strong
                    >
                  </div>
                  <div
                    class="answer mt-5"
                    v-for="option in question.options"
                    :key="option.id"
                  >
                    <v-sheet
                      class="choose bord d-flex align-center rounded pa-2"
                      v-if="!question.submitAnswer"
                    >
                      <v-checkbox
                        v-model="question.answers"
                        color="support"
                        :value="option.id"
                        hide-details
                        class="pa-0 ma-0"
                      ></v-checkbox>
                      <span>{{ option.text }}</span>
                    </v-sheet>
                    <v-sheet
                      class="choose bord d-flex align-center rounded pa-2"
                      v-if="question.submitAnswer"
                    >
                      <v-progress-linear
                        :value="option.perc"
                        height="30"
                        :color="
                          optionState(
                            option.id,
                            question.rightAnswers,
                            question.answers
                          )
                        "
                      >
                        <v-row justify="space-between" class="mx-3">
                          <span>{{ option.text }}</span>
                          <span>{{ Math.ceil(option.perc) }}%</span>
                        </v-row>
                      </v-progress-linear>
                    </v-sheet>
                  </div>

                  <v-btn
                    elevation="0"
                    class="white--text text-capitalize rounded-lg mt-8"
                    :disabled="question.answers.length == 0"
                    v-if="!question.submitAnswer"
                    :class="question.answers.length == 0 ? 'disbtn' : 'support'"
                    @click="question.submitAnswer = true"
                  >
                    <span class="text-caption text-lg-body-2">
                      submit answer
                    </span>
                  </v-btn>
                </v-window-item>
              </v-window>
            </div>
          </div>
        </v-col>
        <v-col cols="6" md="3">
          <v-sheet
            max-height="600"
            class="refrence bord rounded-lg overflow-auto"
          >
            <div
              class="head-refrence text-center secondary rounded-lg rounded-b-0 pa-3"
            >
              <span class="white--text">Reference Ranges</span>
            </div>
            <div class="content-refrence white rounded-b-lg px-4 py-3">
              <div class="itemm bt-border">
                <h3 class="mb-2 font-weight-bold">Haemoglobin</h3>
                <p class="mb-2 txtOnPrimary--text">Men: 135-180 g/L</p>
                <p class="txtOnPrimary--text">Women: 115-160 g/L</p>
              </div>
            </div>
            <div class="content-refrence white rounded-b-lg px-4 py-3">
              <div class="itemm bt-border">
                <h3 class="mb-2 font-weight-bold">Haemoglobin</h3>
                <p class="mb-2 txtOnPrimary--text">Men: 135-180 g/L</p>
                <p class="txtOnPrimary--text">Women: 115-160 g/L</p>
              </div>
            </div>
            <div class="content-refrence white rounded-b-lg px-4 py-3">
              <div class="itemm bt-border">
                <h3 class="mb-2 font-weight-bold">Haemoglobin</h3>
                <p class="mb-2 txtOnPrimary--text">Men: 135-180 g/L</p>
                <p class="txtOnPrimary--text">Women: 115-160 g/L</p>
              </div>
            </div>
            <div class="content-refrence white rounded-b-lg px-4 py-3">
              <div class="itemm bt-border">
                <h3 class="mb-2 font-weight-bold">Haemoglobin</h3>
                <p class="mb-2 txtOnPrimary--text">Men: 135-180 g/L</p>
                <p class="txtOnPrimary--text">Women: 115-160 g/L</p>
              </div>
            </div>
            <div class="content-refrence white rounded-b-lg px-4 py-3">
              <div class="itemm bt-border">
                <h3 class="mb-2 font-weight-bold">Haemoglobin</h3>
                <p class="mb-2 txtOnPrimary--text">Men: 135-180 g/L</p>
                <p class="txtOnPrimary--text">Women: 115-160 g/L</p>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="6" md="3">
          <div class="scoree overflow-hidden rounded-lg bord">
            <table class="rounded-lg">
              <thead class="secondary rounded-lg text-center">
                <tr class="">
                  <td class="py-2">
                    <span class="white--text text-h6 mx-4">Score</span>
                    <span class="score--text text-h6"
                      >{{ result.score }} %</span
                    >
                  </td>
                </tr>
              </thead>
              <tbody v-if="result.questionsResults.length">
                <tr class="d-flex" v-for="n in result.maxQuestion" :key="n">
                  <td class="flex-grow-1 text-center bord bord">{{ n }}</td>
                  <td class="flex-grow-1 text-center bord">
                    <v-icon
                      color="check"
                      v-if="
                        result.questionsResults.filter(
                          (x) => x.questionNum == n
                        )[0].result == 1
                      "
                      >mdi-check</v-icon
                    >
                    <v-icon
                      color="error"
                      v-else-if="
                        result.questionsResults.filter(
                          (x) => x.questionNum == n
                        )[0].result == 0
                      "
                      >mdi-close</v-icon
                    >
                    <v-icon color="dash" v-else>mdi-minus-thick</v-icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-col>
        <template v-if="result.questionsResults.length">
          <v-col
            cols="12"
            md="6"
            v-if="
              result.questionsResults.filter(
                (x) => x.questionNum == onboarding + 1
              )[0].result == 1
            "
          >
            <div>
              <div class="gray bord rounded-lg px-4 py-6">
                <h3 class="support--text font-weight-bold mb-6">
                  Visual field defects:
                </h3>
                <p>
                  Hypocalcemia is associated with QT interval prolongation;
                  Hypercalcemia is associated with QT interval shortening
                </p>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
              </div>
              <div class="primary bord rounded-lg px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  The main points for the exam are:
                </h3>
                <p>
                  Hypocalcemia is associated with QT interval prolongation;
                  Hypercalcemia is associated with QT interval shortening
                </p>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <ul class="mb-5">
                  <li>
                    A congruous defect simply means complete or symmetrical
                    visual field loss and conversely an incongruous defect is
                    incomplete or asymmetric. Please see the link for an
                    excellent diagram
                  </li>
                </ul>
                <ul>
                  <li class="mb-1">Homonymous hemianopia</li>
                  <li class="mb-1">
                    incongruous defects: lesion of optic tract
                  </li>
                  <li class="mb-1">
                    congruous defects: lesion of optic radiation or occipital
                    cortex
                  </li>
                  <li class="mb-1">
                    macula sparing: lesion of occipital cortex
                  </li>
                </ul>
              </div>
              <div class="px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  answer pictures
                </h3>
                <div class="d-md-flex">
                  <v-img
                    max-width="240"
                    max-height="210"
                    class="rounded-lg img-border my-5"
                    src="../assets/imgs/one.png"
                  ></v-img>
                  <v-img
                    max-width="240"
                    max-height="210"
                    class="rounded-lg img-border my-5 mx-md-4"
                    src="../assets/imgs/two.png"
                  ></v-img>
                  <v-img
                    max-width="240"
                    max-height="210"
                    class="rounded-lg img-border my-5"
                    src="../assets/imgs/cml.png"
                  ></v-img>
                </div>
              </div>
              <div class="primary bord rounded-lg px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  The main points for the exam are:
                </h3>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
              </div>
              <div class="editorr mt-5">
                <VueEditor />
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            v-if="
              result.questionsResults.filter(
                (x) => x.questionNum == onboarding + 1
              )[0].result == 0
            "
          >
            <div>
              <div class="primary bord rounded-lg px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  The main points for the exam are:
                </h3>
                <p>
                  Hypocalcemia is associated with QT interval prolongation;
                  Hypercalcemia is associated with QT interval shortening
                </p>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <ul class="mb-5">
                  <li>
                    A congruous defect simply means complete or symmetrical
                    visual field loss and conversely an incongruous defect is
                    incomplete or asymmetric. Please see the link for an
                    excellent diagram
                  </li>
                </ul>
                <ul>
                  <li class="mb-1">Homonymous hemianopia</li>
                  <li class="mb-1">
                    incongruous defects: lesion of optic tract
                  </li>
                  <li class="mb-1">
                    congruous defects: lesion of optic radiation or occipital
                    cortex
                  </li>
                  <li class="mb-1">
                    macula sparing: lesion of occipital cortex
                  </li>
                </ul>
              </div>
              <div class="gray bord rounded-lg px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  Visual field defects:
                </h3>
                <p>
                  Hypocalcemia is associated with QT interval prolongation;
                  Hypercalcemia is associated with QT interval shortening
                </p>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
              </div>
              <div class="px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  answer pictures
                </h3>
                <div class="d-flex">
                  <v-img
                    max-width="240"
                    max-height="210"
                    class="rounded-lg img-border my-5"
                    src="../assets/imgs/one.png"
                  ></v-img>
                  <v-img
                    max-width="240"
                    max-height="210"
                    class="rounded-lg img-border my-5 mx-md-4"
                    src="../assets/imgs/two.png"
                  ></v-img>
                  <v-img
                    max-width="240"
                    max-height="210"
                    class="rounded-lg img-border my-5"
                    src="../assets/imgs/cml.png"
                  ></v-img>
                </div>
              </div>
              <div class="primary bord rounded-lg px-4 py-6 mt-8">
                <h3 class="support--text font-weight-bold mb-6">
                  The main points for the exam are:
                </h3>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
                <div class="list-i d-flex">
                  <div class="mr-2">
                    <v-icon size="16" color="circlee">mdi-brightness-1</v-icon>
                  </div>
                  <p>
                    left homonymous hemianopia means visual field defect to the
                    left, i.e. Lesion of right
                  </p>
                </div>
              </div>
              <div class="editorr mt-5">
                <VueEditor />
              </div>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import { data } from "@/store/data";

// import { VueEditor } from "vue2-editor";
// import { Quill } from "vue2-editor";

export default Vue.extend({
  name: "home",
  components: {
    // VueEditor
  },
  data: () => ({
    questions: [] as any[],
    onboarding: 0,
    clickedQuestions: [1],
  }),
  watch: {},
  computed: {
    result() {
      let questionsResults = this.questions.map((x, i) => {
        if (x.submitAnswer) {
          const isCorrect =
            x.rightAnswers.every((val: any) => x.answers.includes(val)) &&
            x.rightAnswers.length == x.answers.length;
          return {
            questionNum: i + 1,
            result: isCorrect ? 1 : 0,
          };
        } else {
          return {
            questionNum: x.id,
            result: null,
          };
        }
      });
      let score =
        (questionsResults.filter((x) => x.result == 1).length /
          this.questions.length) *
        100;
      let maxQuestion = Math.max(...this.clickedQuestions);
      return {
        questionsResults,
        score,
        maxQuestion,
      };
    },
  },
  methods: {
    optionState(
      option: number,
      rightAnswers: number[],
      usersAnswers: number[]
    ) {
      // answer is correct
      if (rightAnswers.includes(option)) {
        return "green lighten-3";
      }

      // answer is not correct And user chose it
      else if (
        !rightAnswers.includes(option) &&
        usersAnswers.includes(option)
      ) {
        return "red lighten-3";
      } else {
        return "grey lighten-3";
      }
    },
    async getQuestions() {
      try {
        return new Promise<any[]>((resolve) => {
          setTimeout(() => {
            return resolve(data);
          }, 500);
        });
      } catch (error) {
        return [] as any[];
      }
    },
    next() {
      this.onboarding =
        this.onboarding + 1 === this.questions.length
          ? this.onboarding
          : this.onboarding + 1;
      this.clickedQuestions.push(this.onboarding + 1);
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0
          ? this.questions.length - 1
          : this.onboarding - 1;
    },
  },
  async created() {
    this.questions = await this.getQuestions();
    this.questions.map((x) => {
      Vue.set(x, "answers", [] as number[]);
      Vue.set(x, "submitAnswer", false);
    });
    console.log(this.result.questionsResults[0].result);
  },
});
</script>

<style lang="scss">
.home {
  .main-q {
    .head {
      .previous {
        transition: all 0.5s ease-in-out;
        &:hover {
          background-color: #ff4d00 !important;
          border: 1px solid #ff4d00 !important;
        }
      }
    }
    .questions {
      .submiit {
        background: transparent
          linear-gradient(254deg, #ff7400 0%, #ff4d00 100%) 0% 0% no-repeat
          padding-box;
        box-shadow: 0px 0px 16px #ff4d0040;
      }
    }
  }
  .scoree {
    width: 75%;
    @media (max-width: 970px) {
      width: 100%;
    }
    table {
      width: 100%;
    }
  }
}

.quillWrapper {
  .ql-toolbar {
    background: #dddddd 0% 0% no-repeat padding-box;
    border: 1px solid #c2bebe;
    border-radius: 5px 5px 0px 0px;
  }
  .ql-container {
    background: #f7f7f7 0% 0% no-repeat padding-box;
    border: 1px solid #c2bebe;
    border-radius: 0px 0px 5px 5px;
  }
}

.bt-border {
  border-bottom: 2px solid #ddd;
}

.img-border {
  border: 1px solid #c2bebe !important;
}

.v-application .primary.bord,
.v-application .bord,
.v-application .gray.bord {
  border: 1px solid #ddd !important;
  border-color: #ddd !important;
}

.disbtn.v-btn--disabled.white--text.theme--light {
  background-color: #ff4d0040 !important;
  color: #fff !important;
}
</style>
