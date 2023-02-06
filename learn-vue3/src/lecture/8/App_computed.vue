<template>
    <div>
        <h2>{{teacher.name }}</h2>
        <h3>강의가 있습니까?</h3>
        <!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p> -->
        <p>{{ hasLecture }}</p>
        <p>{{ hasLecture }}</p>
        <!-- 메서드 -->
        <p>{{ existLecture() }}</p>
        <p>{{ existLecture() }}</p>
    </div>
</template>

<script>
import {reactive, computed} from 'vue';
export default {
    setup () {
        const teacher = reactive({
            name: 'hahahah',
            lectures: ['test']
        });

        const hasLecture = computed(()=>{
            return teacher.lectures.length > 0 ? '있음' : '없음'
        })

        const existLecture = () =>{
            return teacher.lectures.length > 0 ? '있음' : '없음'
        }
            
        return {
            teacher,
            hasLecture,
            existLecture
        };
    }
}
</script>

<style lang="scss" scoped>

</style>