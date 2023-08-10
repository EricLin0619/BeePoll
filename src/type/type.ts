export type addressBar = {
  url: string;
  address: string;  
}

export type divider = {
  title: string;
}

export type receivedDatasEvent = {
  id: number,
  
}

export type ProposalCard = {
  proposalId: number,
  proposalBody: string,
  acceptCount: any,
  denyCount: any,
  creater: string,
  endTime: any,
  credentialHash: string
  status: string
}