<template>
    <form class="dropbox">
        <v-btn v-if="fileCount" class="btn-reset" fab dark small color="primary" @click="reset($event)">
            <v-icon dark>clear</v-icon>
        </v-btn>
        <input type="file"
               multiple
               ref="fileInput"
               :name="uploadFieldName"
               accept="image/*"
               @change="filesChange($event.target.name, $event.target.files)"
               class="input-file">
        <p v-if="fileCount === 0">
            {{ title }}
        </p>
        <p v-else>
            Uploading {{ fileCount }} files...
        </p>
    </form>
</template>

<script>
    const Uploader = {
        props: {
            onFileLoaded: {
                type: Function,
                default: () => {
                },
            },
            onReset: {
                type: Function,
                default: () => {
                },
            },
            title: {
                type: String,
                default: 'Drag and drop a file or click'
            },
            uploadFieldName: {
                type: String,
                default: 'file',
            },

        },
        data() {
            return {
                fileCount: 0,
                fileInput: null
            }
        },
        methods: {
            reset(e) {
                e.preventDefault();
                this.$refs.fileInput.value = null;
                this.fileCount = 0;
                this.onReset();
            },
            filesChange(fieldName, fileList) {
                const formData = new FormData();

                if (!fileList.length) return;
                this.fileCount = fileList.length;

                Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    });

                this.onFileLoaded(formData);
            }
        },
    };

    export default Uploader;
</script>

<style scoped>
    .dropbox {
        outline: 2px dashed grey;
        outline-offset: -10px;
        background: #dee9fb;
        opacity: 0.7;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px;
        position: relative;
        cursor: pointer;
    }

    .input-file {
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }

    .dropbox:hover {
        opacity: 1;
    }

    .dropbox p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 0;
    }

    .btn-reset {
        position: absolute;
        right: 8px;
        top: 8px;
        z-index: 1;
    }
</style>