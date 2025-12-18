'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class VoteWorkload extends WorkloadModuleBase {
  async submitTransaction() {
    const voteId = `vote_${this.workerIndex}_${Date.now()}_${Math.floor(Math.random()*1e9)}`;

    const request = {
      contractId: 'basic',
      contractFunction: 'CreateAsset',
      invokerIdentity: 'User1',
      contractArguments: [voteId, 'ballot', '1', 'voter', '1'],
      readOnly: false
    };

    return this.sutAdapter.sendRequests(request);
  }
}

function createWorkloadModule() {
  return new VoteWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
