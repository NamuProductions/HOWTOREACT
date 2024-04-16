import {CounterComponent} from "./counter.js";

const counterRoot = document.getElementById("root")
CounterComponent(counterRoot);
CounterComponent(document.getElementById("root2"), 5);
