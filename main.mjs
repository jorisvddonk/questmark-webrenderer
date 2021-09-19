import { QuestVM, parseMarkdown } from "questmark";

const vm = new QuestVM(body => {
  globalThis.emit(body);
}, (choices) => {
  return globalThis.choices(choices);
}, globalThis.extraForeignFunctions ? globalThis.extraForeignFunctions : {});

const vmState = parseMarkdown(document.body.textContent).qvmState;
console.log(vmState);
vm.loadVMState(vmState);
vm.run();

globalThis.vm = vm;
