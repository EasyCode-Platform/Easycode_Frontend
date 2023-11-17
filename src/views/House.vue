<template>
    <div class="house-container">
        <h2 class="heading">历史项目</h2>
        <div class="divider"></div>
        <div class="project-list">
            <!-- Project boxes go here -->
            <div
                v-for="(project, index) in projects" 
                :key="index" 
                class="project-box" 
                @mouseover="hoverProject(index)" 
                @mouseleave="leaveProject(index)"
            >
                <!-- Customize the content of each project box as needed -->
                {{ project.name }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            projects: [
                { name: '项目1' },
                { name: '项目2' },
                { name: '项目3' },
                // Add more projects as needed
            ],
            hoveredProject: null,
        };
    },
    methods: {
        hoverProject(index) {
            this.hoveredProject = index;
        },
        leaveProject() {
            this.hoveredProject = null;
        },
    },
};
</script>
  
<style scoped>
.house-container {
    padding: 20px;
}

.heading {
    font-size: 24px;
    margin-bottom: 20px;
}

.divider {
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
}

.project-list {
    display: flex;
    flex-wrap: wrap;
}

.project-box {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: transform .2s;
}

.project-box:hover {
    transform: scale(1.05);
}
</style>