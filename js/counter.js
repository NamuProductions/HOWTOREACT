export function CounterComponent(root, resetLimit = 10) {
    let counter = 0;
    const fragment = document.createDocumentFragment()

    const btn = document.createElement("button");
    btn.setAttribute("class", "btn-counter")
    btn.innerHTML = "Counter"

    const current_count = document.createElement("div")
    current_count.setAttribute("class", "elem-counter")

    const reset_btn = document.createElement("button")
    reset_btn.setAttribute("class", "count-reset")
    reset_btn.innerHTML = "Reset Count"

    const current_count_display = count => {
        current_count.innerHTML = `<span style="color: red;">Counter: ${count}</span>`
    }

    const reset_counter = count => {
        if (count > resetLimit) {
            root.appendChild(reset_btn)
        } else {
            if (document.contains(reset_btn)) {
                reset_btn.remove();
            }
        }
    }

    btn.addEventListener("click", event => {
        counter = counter + 1
        current_count_display(counter)
        reset_counter(counter)
    })

    reset_btn.addEventListener("click", event => {
        counter = 0;
        current_count.innerHTML = "Count reset"
    })

    fragment.appendChild(btn)
    fragment.appendChild(current_count)

    root.appendChild(fragment)
}
