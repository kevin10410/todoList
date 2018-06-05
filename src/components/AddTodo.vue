<template>
    <div>
        <div v-if="!isAdding" class="addList" @click="addList">
            <p class="plus"><i class="fas fa-plus"></i></p><p>Add Task</p>
        </div>
        <div v-else class="addContent">
            <div class="todoTitle" :class="{'important':listContent.isHighlight}">
                <div class="check"></div>
                <input class="title" v-model="listContent.title" placeholder="Type Something Here…">
                <p class="starIcon" :class="{'highlight':listContent.isHighlight}" @click="listContent.isHighlight = !listContent.isHighlight"><i class="fas fa-star"></i></p>
                <p class="editIcon" :class="{'editing':isAdding}"><i class="fas fa-pencil-alt"></i></p>
            </div>
            <div class="todoContent">
                <div class="todoInfo">
                    <p class="subtitle"><span><i class="far fa-calendar-alt"></i></span>Deadline</p>
                    <div class="timer">
                    <input type="date" v-model="listContent.date">
                    <input type="time" v-model="listContent.time">
                    </div>
                    <p class="subtitle"><span><i class="far fa-file"></i></span>File</p>
                    <div class="upload">
                    <div v-if="listContent.fileName !== ''" class="fileInfo">
                        <p>{{listContent.fileName}}</p>
                        <p class="time">uploaded {{listContent.uploadTime}}</p>
                    </div>  
                    <label class="uploadIcon"><i class="fas fa-plus"></i>
                      <input type="file" @change="selectFile">
                    </label>
                    </div>
                    <p class="subtitle"><span><i class="far fa-comment"></i></span>Comment</p>
                    <textarea class="comment" v-model="listContent.comment" placeholder="Type your memo here…"></textarea>
                </div>
                <div class="btns">
                    <button class="cancel" @click="cancel"><span><i class="fas fa-times"></i></span>Cancel</button>
                    <button class="add" @click="add"><span><i class="fas fa-plus"></i></span>Add Task</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isAdding: false,
      account: 0,
      listContent: {
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
    addList() {
      this.isAdding = !this.isAdding;
    },
    selectFile(event) {
      if (event.target.files.length !== 0) {
        let time = new Date().toISOString().slice(0, 10);
        this.listContent.fileName = event.target.files[0].name;
        this.listContent.uploadTime = time;
      }
    },
    cancel() {
      this.listContent = {
        number: 0,
        title: "",
        fileName: "",
        uploadTime: "",
        isHighlight: false,
        isComplete: false,
        date: "",
        time: "",
        comment: ""
      };
      this.isAdding = false;
    },
    add() {
      if (this.listContent.title !== "") {
        this.$store.commit("addTodoItem", this.listContent);
        this.isAdding = false;
        this.account++;
        this.listContent = {
          number: this.account,
          title: "",
          fileName: "",
          uploadTime: "",
          isHighlight: false,
          isComplete: false,
          date: "",
          time: "",
          comment: ""
        };
      } else {
        window.alert("Please input Title!");
      }
      console.log(this.$store.state.todoItems);
    }
  }
};
</script>
<style lang="scss" scoped>
.addList {
  height: 61px;
  margin-top: 24px;
  background: #ffffff;
  border: 2px solid #c8c8c8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    color: #c8c8c8;
    font-family: Roboto-Regular;
    font-size: 24px;
  }

  .plus {
    margin: 0 14px 0 33px;
  }
}

.addContent {
  margin: 24px 0;
  background: #f2f2f2;
  box-shadow: 0 4px 4px 0 #c8c8c8;
  border-radius: 5px;

  .todoTitle {
    padding: 24px 32px;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 2px solid #c8c8c8;

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

  .todoTitle.important {
    background: #fff2dc;
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

      .add {
        color: #4a90e2;
      }

      .add:hover {
        color: #ffffff;
        background: #4a90e2;
      }
    }
  }
}
</style>

