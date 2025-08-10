let me = {
    name: "Igor",
    game: "dota 2",

    play() {
        console.log(this.name + ' любит играть в ' + this.game)
    },

    sayHi: function() {
        console.log(this.name + " говорит привет")
    }
}

me.play()

