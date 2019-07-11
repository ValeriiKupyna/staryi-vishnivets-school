<template>
    <v-layout row wrap>
        <v-flex sm8>
            <croppa
                    v-model="croppa"
                    placeholder="load img"
                    accept=".jpeg,.png"
                    remove-button-color="black"
                    placeholder-color="#000"
                    :canvas-color="canvasColor"
                    :width="size.width"
                    :height="size.height"
                    :placeholder-font-size="16"
                    :show-remove-button="true"
                    :zoom-speed="7"
                    :show-loading="true"
                    :loading-size="50"
                    :quality="quality.value"
                    prevent-white-space="true"
                    @init="onInit"
            ></croppa>
            <a href="#" id="download"></a>
        </v-flex>

        <v-flex sm2>
            <div>
                <v-radio-group v-model="quality" label="Choose size">
                    <v-radio
                            v-for="size in sizeGroup"
                            :key="size"
                            :label="`${size.label}`"
                            :value="size"
                    ></v-radio>
                </v-radio-group>

                <v-checkbox
                        v-model="isCircle"
                        label="Made Circle"
                        @change="madeCircle"
                ></v-checkbox>
            </div>

            <div>
            </div>

            <div class="mt-4">
                <v-btn @click="download">Download</v-btn>
            </div>
        </v-flex>
    </v-layout>
</template>


<script>
    import Croppa from 'vue-croppa';
    import Vue from 'vue';

    Vue.use(Croppa, {componentName: 'croppa'});
    const ImgCrop = {
        props: ['src'],
        data() {
            return {
                croppa: {},
                sizeGroup: [{label: '512x256', value: 1}, {label: '1024x512', value: 2}, {
                    label: '2048x1024',
                    value: 4
                }],
                isCircle: false,
                quality: {label: '512x256', value: 1},
            }
        },
        computed: {
            size() {
                return this.isCircle ? {width: 256, height: 256} : {width: 512, height: 256};
            },
            canvasColor() {
                return (this.croppa.img || this.isCircle) ? 'transparent' : '#ffffff';
            }
        },
        methods: {
            onInit() {
                this.madeCircle();
            },
            download(type, compressionRate) {
                this.croppa.generateBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.download = 'filename';
                    a.href = url;
                    a.click();
                    URL.revokeObjectURL(url);
                }, type, compressionRate)
            },
            madeCircle() {
                if (this.isCircle) {
                    return this.croppa.addClipPlugin(function (ctx, x, y, w, h) {
                        ctx.beginPath();
                        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true);
                        ctx.closePath()
                    })
                }

                this.croppa.clipPlugins = [];


            }
        },
        components: {}
    };

    export default ImgCrop;
</script>

<style>
    .preview {
        width: 200px;
        height: 200px;
    }
</style>