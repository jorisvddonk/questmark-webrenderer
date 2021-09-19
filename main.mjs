import { QuestVM, parseMarkdown } from "questmark";

const vm = new QuestVM(body => {
  globalThis.emit(body);
}, (choices) => {
  return globalThis.choices(choices);
}, globalThis.extraForeignFunctions ? globalThis.extraForeignFunctions : {});

const vmState = parseMarkdown(document.body.textContent).qvmState;
console.log(vmState);
vm.loadVMState(vmState);
let run = true;
if (globalThis.preRun) {
  let result = globalThis.preRun(vm);
  if (result === false) {
    run = false;
  }
}
if (run) {
  vm.run();
}

globalThis.vm = vm;
