export function CounterComponent() {
    const root = document.getElementById("root")
    let counter = 0;

    const fragment = document.createDocumentFragment()

    const btn = document.createElement("button");
    btn.setAttribute("id", "btn-counter")
    btn.innerHTML = "Counter"

    const current_count = document.createElement("div")
    current_count.setAttribute("id", "elem-counter")

    const reset_btn = document.createElement("button")
    reset_btn.setAttribute("id", "count-reset")
    reset_btn.innerHTML = "Reset Count"

    const current_count_display = count => {
        current_count.innerHTML = `<span style="color: red;">Counter: ${count}</span>`
    }

    const reset_counter = count =>{
        if (count > 10) {
            root.appendChild(reset_btn)
        } else {
            if(document.body.contains(document.getElementById("count-reset"))) {
                document.body.removeChild(reset_btn)
            }
        }
    }

    document.addEventListener("click", event => {
        if(event.target && event.target.id === "btn-counter") {
            console.log('count')
            counter = counter + 1

            current_count_display(counter)
            reset_counter(counter)
        }
    })

    document.addEventListener("click", event => {
        if(event.target && event.target.id === "count-reset") {
            counter = 0;
            current_count.innerHTML = "Count reset"
        }
    })

    fragment.appendChild(btn)
    fragment.appendChild(current_count)

    root.appendChild(fragment)
}
