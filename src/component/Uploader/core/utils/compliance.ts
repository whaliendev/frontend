import { Policy, PolicyType } from "../types";

enum ComplianceMIME{
  APK = 'application/vnd.android.package-archive',
  IPA = 'application/iphone',
}

const DEFAULT_STORAGE_POLICY: Policy = {
  id: 1,
  name: "Default storage policy",
  allowedSuffix: [],
  maxSize: 0,
  type: PolicyType.local,
}

export const getPolicyFuckedByCompliance = (file: File, policy: Policy): Policy => {
  if (Object.values(ComplianceMIME).includes(file.type as ComplianceMIME)) {
    return DEFAULT_STORAGE_POLICY;
  }

  return policy;
}