/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a DNS service by id in a private cloud workload network.
 *
 * @summary Create or update a DNS service by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-03-01/examples/WorkloadNetworks_UpdateDnsServices.json
 */
async function workloadNetworksUpdateDnsService() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const dnsServiceId = "dnsService1";
  const workloadNetworkDnsService = {
    defaultDnsZone: "defaultDnsZone1",
    displayName: "dnsService1",
    dnsServiceIp: "5.5.5.5",
    fqdnZones: ["fqdnZone1"],
    logLevel: "INFO",
    revision: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginUpdateDnsServiceAndWait(
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    workloadNetworkDnsService
  );
  console.log(result);
}

async function main() {
  workloadNetworksUpdateDnsService();
}

main().catch(console.error);
