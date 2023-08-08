pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";

template Himitsu () {
  signal input value;

  signal input hash;

  component poseidon = Poseidon(1);
  log("input",value);
  poseidon.inputs[0] <== value;
  log(poseidon.out);
  hash === poseidon.out;
}

component main{public[hash]} = Himitsu();