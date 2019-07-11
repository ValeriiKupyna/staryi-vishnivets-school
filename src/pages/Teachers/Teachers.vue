<template>
    <div>
        <h1>Teachers</h1>

        <div>
            <h4>Uploader</h4>
            <Uploader :onFileLoaded="onFileLoaded"/>
        </div>

        <div>
            <ImgCrop :src="imgData"/>
        </div>
    </div>

</template>


<script>
    import Uploader from '../../components/Uploader/Uploader';
    import ImgCrop from '../../components/ImgCrop/ImgCrop';

    const Teachers = {
        data() {
            return {
                imgData: null
            }
        },
        methods: {
            onFileLoaded(files) {
                const reader = new FileReader();

                reader.onload = (file) => {
                    this.imgData = file.target.result;
                };

                reader.readAsDataURL(files[0])
            }
        },
        components: {
            Uploader,
            ImgCrop
        }
    };

    export default Teachers;
</script>