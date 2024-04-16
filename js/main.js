import {CounterComponent} from "./counter";

const counterRoot = document.getElementById("root")
CounterComponent(counterRoot);
CounterComponent(document.getElementById("root2"), 5);
