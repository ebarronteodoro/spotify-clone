<script lang="ts">
    const currentTime = new Date()
    const currenHour = currentTime.getHours()

    let greeting = ""

    if(currenHour < 12) {
        greeting = "Buenos días"
    } else if (currenHour < 18) {
        greeting = "Buenas tardes"
    } else {
        greeting = "Buenas noches"
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>