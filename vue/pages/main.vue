<template>
    <div>
        <h1>Роботу виконав студент групи К-28</h1>
        <h1>Точаненко Владислав Володимирович</h1>

        <table>
            <tr>
                <td>Предметна область</td>
                <td>Поштова адреса</td>
            </tr>
            <tr>
                <td>Тип списку</td>
                <td>Однозв'язний циклічний</td>
            </tr>
            <tr>
                <td>Тип дерева</td>
                <td>R-B, B+</td>
            </tr>
            <tr>
                <td>Алгоритми сортування</td>
                <td>Insertion, Quicksort, Heap, Bucket</td>
            </tr>
        </table>
    </div>
</template>

<script>
    module.exports = {
        name: "mainpage"
    };
</script>

<style scoped>
    td {
        padding: 4px 8px 4px 0;
        font-weight: bold;
    }

    td + td {
        font-weight: normal;
    }
</style>