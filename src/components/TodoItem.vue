<template>
    <li>
        <div class="itemContent">
            <div class="todoTitle" :class="{'important': content.isHighlight, 'finished': content.isComplete}" @click="toggleOpen">
                <div class="banner">
                  <div class="check" @click="updateIsComplete"><i class="fas fa-check"></i></div>
                  <input class="title" v-model="content.title" :readonly="!isEditing">
                  <p class="starIcon" :class="{'highlight':content.isHighlight}" @click="updateIsHighlight">
                    <span v-if="content.isHighlight"><i class="fas fa-star"></i></span>
                    <span v-else><i class="far fa-star"></i></span>
                  </p>
                  <p class="editIcon" :class="{'editing':isEditing}" @click.stop="edit"><i class="fas fa-pencil-alt"></i></p>
                </div>
                <div class="marks">
                  <p v-if="content.date !=='' || content.time !=='' || content.comment !=='' || content.fileName !== ''">
                    <span v-if="content.date !=='' ||content.time !=='' "><i class="far fa-calendar-alt"></i></span>
                    <span v-if="content.date !==''"> {{content.date}}</span>
                    <span v-if="content.time !==''"> {{content.time}}</span>
                    <span v-if="content.fileName !==''"><i class="far fa-file"></i></span>
                    <span v-if="content.comment !==''"><i class="far fa-comment"></i></span>
                  </p>
                </div>
            </div>
            <div v-if="isOpen" class="todoContent">
                <div class="todoInfo">
                    <p class="subtitle"><span><i class="far fa-calendar-alt"></i></span>Deadline</p>
                    <div class="timer">
                    <input type="date" v-model="content.date" :readonly="!isEditing">
                    <input type="time" v-model="content.time" :readonly="!isEditing">
                    </div>
                    <p class="subtitle"><span><i class="far fa-file"></i></span>File</p>
                    <div class="upload">
                    <div v-if="content.fileName !== ''" class="fileInfo">
                        <p>{{content.fileName}}</p>
                        <p class="time">uploaded {{content.uploadTime}}</p>
                    </div>  
                    <label class="uploadIcon"><i class="fas fa-plus"></i>
                      <input type="file" @change="selectFile">
                    </label>
                    </div>
                    <p class="subtitle"><span><i class="far fa-comment"></i></span>Comment</p>
                    <textarea class="comment" 
                    v-model="content.comment"
                    placeholder="Type your memo here…"
                    :readonly="!isEditing"></textarea>
                </div>
                <div class="btns">
                    <button class="cancel" @click="cancel"><span><i class="fas fa-times"></i></span>Cancel</button>
                    <button class="save" @click="save"><span><i class="fas fa-plus"></i></span>Save</button>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      isOpen: false,
      isEditing: false,
      content: {
        number: 0,
        title: "",
        fileName: "",
        uploadTime: "",
        isHighlight: false,
        isComplete: false,
        date: "",
        time: "",
        comment: ""
      }
    };
  },
  methods: {
    toggleOpen() {
      if (!this.isEditing) {
        this.isOpen = !this.isOpen;
      }
    },
    edit() {
      if (!this.isEditing) {
        this.isOpen = true;
        this.isEditing = true;
      } else {
        this.isOpen = false;
        this.isEditing = false;
      }
    },
    updateIsHighlight() {
      if (this.isEditing) {
        console.log("highlight");
        this.content.isHighlight = !this.content.isHighlight;
      }
    },
    updateIsComplete() {
      if (this.isEditing) {
        console.log("complete");
        this.content.isComplete = !this.content.isComplete;
      }
    },
    selectFile(event) {
      if (event.target.files.length !== 0) {
        let time = new Date().toISOString().slice(0, 10);
        this.content.fileName = event.target.files[0].name;
        this.content.uploadTime = time;
      }
    },
    cancel() {
      Object.assign(this.content, this.item);
      this.isOpen = false;
      this.isEditing = false;
    },
    save() {
      let index = this.$store.state.todoItems.indexOf(this.item);
      let updateItem = {};
      Object.assign(updateItem, this.content);
      this.$store.commit("updateTodoItem", {
        item: updateItem,
        index: index
      });
      this.isOpen = false;
      this.isEditing = false;
    }
  },
  mounted() {
    Object.assign(this.content, this.item);
  }
};
</script>

<style lang="scss" scoped>
.itemContent {
  margin: 24px 0;
  background: #f2f2f2;
  box-shadow: 0 4px 4px 0 #c8c8c8;
  border-radius: 5px;

  .todoTitle {
    padding: 24px 32px;
    border-bottom: 2px solid #c8c8c8;

    .banner {
      position: relative;
      display: flex;
      align-items: center;

      .title {
        margin-left: 16px;
        padding: 0;
        font-family: Roboto-Medium;
        font-size: 20px;
        width: 400px;
        height: 28px;
        background: rgba(0, 0, 0, 0);
        color: #000000;
        border: none;
        outline: none;
      }

      .title::placeholder {
        color: #000000;
      }

      .check {
        height: 24px;
        width: 24px;
        background: #ffffff;
        border-radius: 2px;
        text-align: center;
        line-height: 24px;
        color: #ffffff;
      }

      .check.finished {
        background: #4a90e2;
      }

      p {
        margin-left: 16px;
        font-family: Roboto-Medium;
        font-size: 24px;
        color: #000000;
      }

      .starIcon {
        position: absolute;
        right: 88px;
      }

      .starIcon.highlight {
        color: #f5a623;
      }

      .editIcon {
        position: absolute;
        right: 32px;
        color: #000000;
      }

      .editIcon.editing {
        color: #4a90e2;
      }
    }

    .marks {
      font-family: Roboto-Regular;
      font-size: 14px;
      color: #757575;
      padding-left: 40px;
    }
  }

  .todoTitle.important {
    background: #fff2dc;
  }

  .todoTitle.finished {
    .check {
      background: #4a90e2;
    }

    .title {
      text-decoration: line-through;
      color: #9b9b9b;
    }
  }

  .todoContent {
    .todoInfo {
      padding: 24px;

      .subtitle {
        margin-left: 48px;

        span {
          display: inline-block;
          width: 18px;
          margin-right: 9px;
        }
      }
      .timer {
        margin: 8px 0 22px 75px;

        input {
          outline: none;
          border: none;
          background: #ffffff;
          border: 1px solid #ffffff;
          border-radius: 2px;
          width: 162px;
          height: 35px;
          margin-right: 8px;
        }

        input:focus {
          border: 1px solid #4a90e2;
          box-shadow: 0 0 4px 0 #4a90e2;
        }
      }

      .upload {
        display: flex;
        padding: 11px 0 27px 75px;

        .fileInfo {
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          font-family: Roboto-Regular;
          font-size: 12px;

          .time {
            color: #757575;
          }
        }

        .uploadIcon {
          display: block;
          width: 32px;
          height: 32px;
          background: #c8c8c8;
          border-radius: 2px;
          font-size: 24px;
          color: #ffffff;
          line-height: 32px;
          text-align: center;

          input {
            display: none;
          }
        }

        .uploadIcon:hover {
          background: #4a90e2;
        }
      }

      .comment {
        width: 445px;
        height: 120px;
        margin-top: 8px;
        margin-left: 75px;
        outline: none;
        border: 1px solid #ffffff;
        padding: 8px 16px;
        font-size: 16px;
      }

      .comment::placeholder {
        color: #000000;
      }

      .comment:focus {
        border: 1px solid #4a90e2;
        box-shadow: 0 0 4px 0 #4a90e2;
      }
    }

    .btns {
      width: 100%;
      display: flex;

      button {
        width: 50%;
        height: 65px;
        outline: none;
        border: none;
        font-family: Roboto-Regular;
        font-size: 24px;

        span {
          margin-right: 14px;
        }
      }

      .cancel {
        color: #d0021b;
      }

      .cancel:hover {
        color: #ffffff;
        background: #d0021b;
      }

      .save {
        color: #4a90e2;
      }

      .save:hover {
        color: #ffffff;
        background: #4a90e2;
      }
    }
  }
}
</style>

