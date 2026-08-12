/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudGcpDmIntegrationsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#account_id CloudGcpDmIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#linked_account_id CloudGcpDmIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * ai_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#ai_platform CloudGcpDmIntegrations#ai_platform}
  */
  readonly aiPlatform?: CloudGcpDmIntegrationsAiPlatform;
  /**
  * alloy_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#alloy_db CloudGcpDmIntegrations#alloy_db}
  */
  readonly alloyDb?: CloudGcpDmIntegrationsAlloyDb;
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#api_gateway CloudGcpDmIntegrations#api_gateway}
  */
  readonly apiGateway?: CloudGcpDmIntegrationsApiGateway;
  /**
  * app_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#app_engine CloudGcpDmIntegrations#app_engine}
  */
  readonly appEngine?: CloudGcpDmIntegrationsAppEngine;
  /**
  * big_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#big_query CloudGcpDmIntegrations#big_query}
  */
  readonly bigQuery?: CloudGcpDmIntegrationsBigQuery;
  /**
  * big_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#big_table CloudGcpDmIntegrations#big_table}
  */
  readonly bigTable?: CloudGcpDmIntegrationsBigTable;
  /**
  * composer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#composer CloudGcpDmIntegrations#composer}
  */
  readonly composer?: CloudGcpDmIntegrationsComposer;
  /**
  * data_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_flow CloudGcpDmIntegrations#data_flow}
  */
  readonly dataFlow?: CloudGcpDmIntegrationsDataFlow;
  /**
  * data_proc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_proc CloudGcpDmIntegrations#data_proc}
  */
  readonly dataProc?: CloudGcpDmIntegrationsDataProc;
  /**
  * data_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_store CloudGcpDmIntegrations#data_store}
  */
  readonly dataStore?: CloudGcpDmIntegrationsDataStore;
  /**
  * firebase_app_hosting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_app_hosting CloudGcpDmIntegrations#firebase_app_hosting}
  */
  readonly firebaseAppHosting?: CloudGcpDmIntegrationsFirebaseAppHosting;
  /**
  * firebase_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_auth CloudGcpDmIntegrations#firebase_auth}
  */
  readonly firebaseAuth?: CloudGcpDmIntegrationsFirebaseAuth;
  /**
  * firebase_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_database CloudGcpDmIntegrations#firebase_database}
  */
  readonly firebaseDatabase?: CloudGcpDmIntegrationsFirebaseDatabase;
  /**
  * firebase_hosting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_hosting CloudGcpDmIntegrations#firebase_hosting}
  */
  readonly firebaseHosting?: CloudGcpDmIntegrationsFirebaseHosting;
  /**
  * firebase_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_storage CloudGcpDmIntegrations#firebase_storage}
  */
  readonly firebaseStorage?: CloudGcpDmIntegrationsFirebaseStorage;
  /**
  * firebase_vertex_ai block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_vertex_ai CloudGcpDmIntegrations#firebase_vertex_ai}
  */
  readonly firebaseVertexAi?: CloudGcpDmIntegrationsFirebaseVertexAi;
  /**
  * firestore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firestore CloudGcpDmIntegrations#firestore}
  */
  readonly firestore?: CloudGcpDmIntegrationsFirestore;
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#functions CloudGcpDmIntegrations#functions}
  */
  readonly functions?: CloudGcpDmIntegrationsFunctions;
  /**
  * interconnect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#interconnect CloudGcpDmIntegrations#interconnect}
  */
  readonly interconnect?: CloudGcpDmIntegrationsInterconnect;
  /**
  * istio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#istio CloudGcpDmIntegrations#istio}
  */
  readonly istio?: CloudGcpDmIntegrationsIstio;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#kubernetes CloudGcpDmIntegrations#kubernetes}
  */
  readonly kubernetes?: CloudGcpDmIntegrationsKubernetes;
  /**
  * load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#load_balancing CloudGcpDmIntegrations#load_balancing}
  */
  readonly loadBalancing?: CloudGcpDmIntegrationsLoadBalancing;
  /**
  * managed_kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#managed_kafka CloudGcpDmIntegrations#managed_kafka}
  */
  readonly managedKafka?: CloudGcpDmIntegrationsManagedKafka;
  /**
  * mem_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#mem_cache CloudGcpDmIntegrations#mem_cache}
  */
  readonly memCache?: CloudGcpDmIntegrationsMemCache;
  /**
  * memory_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#memory_store CloudGcpDmIntegrations#memory_store}
  */
  readonly memoryStore?: CloudGcpDmIntegrationsMemoryStore;
  /**
  * pub_sub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#pub_sub CloudGcpDmIntegrations#pub_sub}
  */
  readonly pubSub?: CloudGcpDmIntegrationsPubSub;
  /**
  * redis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#redis CloudGcpDmIntegrations#redis}
  */
  readonly redis?: CloudGcpDmIntegrationsRedis;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#router CloudGcpDmIntegrations#router}
  */
  readonly router?: CloudGcpDmIntegrationsRouter;
  /**
  * run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#run CloudGcpDmIntegrations#run}
  */
  readonly run?: CloudGcpDmIntegrationsRun;
  /**
  * spanner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#spanner CloudGcpDmIntegrations#spanner}
  */
  readonly spanner?: CloudGcpDmIntegrationsSpanner;
  /**
  * sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#sql CloudGcpDmIntegrations#sql}
  */
  readonly sql?: CloudGcpDmIntegrationsSql;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#storage CloudGcpDmIntegrations#storage}
  */
  readonly storage?: CloudGcpDmIntegrationsStorage;
  /**
  * virtual_machines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#virtual_machines CloudGcpDmIntegrations#virtual_machines}
  */
  readonly virtualMachines?: CloudGcpDmIntegrationsVirtualMachines;
  /**
  * vpc_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#vpc_access CloudGcpDmIntegrations#vpc_access}
  */
  readonly vpcAccess?: CloudGcpDmIntegrationsVpcAccess;
}
export interface CloudGcpDmIntegrationsAiPlatform {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsAiPlatformToTerraform(struct?: CloudGcpDmIntegrationsAiPlatformOutputReference | CloudGcpDmIntegrationsAiPlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsAiPlatformToHclTerraform(struct?: CloudGcpDmIntegrationsAiPlatformOutputReference | CloudGcpDmIntegrationsAiPlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsAiPlatformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsAiPlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsAiPlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsAlloyDb {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsAlloyDbToTerraform(struct?: CloudGcpDmIntegrationsAlloyDbOutputReference | CloudGcpDmIntegrationsAlloyDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsAlloyDbToHclTerraform(struct?: CloudGcpDmIntegrationsAlloyDbOutputReference | CloudGcpDmIntegrationsAlloyDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsAlloyDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsAlloyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsAlloyDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsApiGateway {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsApiGatewayToTerraform(struct?: CloudGcpDmIntegrationsApiGatewayOutputReference | CloudGcpDmIntegrationsApiGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsApiGatewayToHclTerraform(struct?: CloudGcpDmIntegrationsApiGatewayOutputReference | CloudGcpDmIntegrationsApiGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsApiGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsApiGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsApiGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsAppEngine {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsAppEngineToTerraform(struct?: CloudGcpDmIntegrationsAppEngineOutputReference | CloudGcpDmIntegrationsAppEngine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsAppEngineToHclTerraform(struct?: CloudGcpDmIntegrationsAppEngineOutputReference | CloudGcpDmIntegrationsAppEngine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsAppEngineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsAppEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsAppEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsBigQuery {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsBigQueryToTerraform(struct?: CloudGcpDmIntegrationsBigQueryOutputReference | CloudGcpDmIntegrationsBigQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsBigQueryToHclTerraform(struct?: CloudGcpDmIntegrationsBigQueryOutputReference | CloudGcpDmIntegrationsBigQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsBigQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsBigQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsBigQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsBigTable {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsBigTableToTerraform(struct?: CloudGcpDmIntegrationsBigTableOutputReference | CloudGcpDmIntegrationsBigTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsBigTableToHclTerraform(struct?: CloudGcpDmIntegrationsBigTableOutputReference | CloudGcpDmIntegrationsBigTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsBigTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsBigTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsBigTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsComposer {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsComposerToTerraform(struct?: CloudGcpDmIntegrationsComposerOutputReference | CloudGcpDmIntegrationsComposer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsComposerToHclTerraform(struct?: CloudGcpDmIntegrationsComposerOutputReference | CloudGcpDmIntegrationsComposer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsComposerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsComposer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsComposer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsDataFlow {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsDataFlowToTerraform(struct?: CloudGcpDmIntegrationsDataFlowOutputReference | CloudGcpDmIntegrationsDataFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsDataFlowToHclTerraform(struct?: CloudGcpDmIntegrationsDataFlowOutputReference | CloudGcpDmIntegrationsDataFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsDataFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsDataFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsDataFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsDataProc {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsDataProcToTerraform(struct?: CloudGcpDmIntegrationsDataProcOutputReference | CloudGcpDmIntegrationsDataProc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsDataProcToHclTerraform(struct?: CloudGcpDmIntegrationsDataProcOutputReference | CloudGcpDmIntegrationsDataProc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsDataProcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsDataProc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsDataProc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsDataStore {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsDataStoreToTerraform(struct?: CloudGcpDmIntegrationsDataStoreOutputReference | CloudGcpDmIntegrationsDataStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsDataStoreToHclTerraform(struct?: CloudGcpDmIntegrationsDataStoreOutputReference | CloudGcpDmIntegrationsDataStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsDataStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirebaseAppHosting {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirebaseAppHostingToTerraform(struct?: CloudGcpDmIntegrationsFirebaseAppHostingOutputReference | CloudGcpDmIntegrationsFirebaseAppHosting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirebaseAppHostingToHclTerraform(struct?: CloudGcpDmIntegrationsFirebaseAppHostingOutputReference | CloudGcpDmIntegrationsFirebaseAppHosting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirebaseAppHostingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirebaseAppHosting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirebaseAppHosting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirebaseAuth {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirebaseAuthToTerraform(struct?: CloudGcpDmIntegrationsFirebaseAuthOutputReference | CloudGcpDmIntegrationsFirebaseAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirebaseAuthToHclTerraform(struct?: CloudGcpDmIntegrationsFirebaseAuthOutputReference | CloudGcpDmIntegrationsFirebaseAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirebaseAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirebaseAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirebaseAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirebaseDatabase {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirebaseDatabaseToTerraform(struct?: CloudGcpDmIntegrationsFirebaseDatabaseOutputReference | CloudGcpDmIntegrationsFirebaseDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirebaseDatabaseToHclTerraform(struct?: CloudGcpDmIntegrationsFirebaseDatabaseOutputReference | CloudGcpDmIntegrationsFirebaseDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirebaseDatabaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirebaseDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirebaseDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirebaseHosting {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirebaseHostingToTerraform(struct?: CloudGcpDmIntegrationsFirebaseHostingOutputReference | CloudGcpDmIntegrationsFirebaseHosting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirebaseHostingToHclTerraform(struct?: CloudGcpDmIntegrationsFirebaseHostingOutputReference | CloudGcpDmIntegrationsFirebaseHosting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirebaseHostingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirebaseHosting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirebaseHosting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirebaseStorage {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirebaseStorageToTerraform(struct?: CloudGcpDmIntegrationsFirebaseStorageOutputReference | CloudGcpDmIntegrationsFirebaseStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirebaseStorageToHclTerraform(struct?: CloudGcpDmIntegrationsFirebaseStorageOutputReference | CloudGcpDmIntegrationsFirebaseStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirebaseStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirebaseStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirebaseStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirebaseVertexAi {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirebaseVertexAiToTerraform(struct?: CloudGcpDmIntegrationsFirebaseVertexAiOutputReference | CloudGcpDmIntegrationsFirebaseVertexAi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirebaseVertexAiToHclTerraform(struct?: CloudGcpDmIntegrationsFirebaseVertexAiOutputReference | CloudGcpDmIntegrationsFirebaseVertexAi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirebaseVertexAiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirebaseVertexAi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirebaseVertexAi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFirestore {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFirestoreToTerraform(struct?: CloudGcpDmIntegrationsFirestoreOutputReference | CloudGcpDmIntegrationsFirestore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFirestoreToHclTerraform(struct?: CloudGcpDmIntegrationsFirestoreOutputReference | CloudGcpDmIntegrationsFirestore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFirestoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFirestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFirestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsFunctions {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsFunctionsToTerraform(struct?: CloudGcpDmIntegrationsFunctionsOutputReference | CloudGcpDmIntegrationsFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsFunctionsToHclTerraform(struct?: CloudGcpDmIntegrationsFunctionsOutputReference | CloudGcpDmIntegrationsFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsInterconnect {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsInterconnectToTerraform(struct?: CloudGcpDmIntegrationsInterconnectOutputReference | CloudGcpDmIntegrationsInterconnect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsInterconnectToHclTerraform(struct?: CloudGcpDmIntegrationsInterconnectOutputReference | CloudGcpDmIntegrationsInterconnect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsInterconnectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsInterconnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsInterconnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsIstio {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsIstioToTerraform(struct?: CloudGcpDmIntegrationsIstioOutputReference | CloudGcpDmIntegrationsIstio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsIstioToHclTerraform(struct?: CloudGcpDmIntegrationsIstioOutputReference | CloudGcpDmIntegrationsIstio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsIstioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsIstio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsIstio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsKubernetes {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsKubernetesToTerraform(struct?: CloudGcpDmIntegrationsKubernetesOutputReference | CloudGcpDmIntegrationsKubernetes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsKubernetesToHclTerraform(struct?: CloudGcpDmIntegrationsKubernetesOutputReference | CloudGcpDmIntegrationsKubernetes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsKubernetesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsLoadBalancing {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsLoadBalancingToTerraform(struct?: CloudGcpDmIntegrationsLoadBalancingOutputReference | CloudGcpDmIntegrationsLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsLoadBalancingToHclTerraform(struct?: CloudGcpDmIntegrationsLoadBalancingOutputReference | CloudGcpDmIntegrationsLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsLoadBalancingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsManagedKafka {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsManagedKafkaToTerraform(struct?: CloudGcpDmIntegrationsManagedKafkaOutputReference | CloudGcpDmIntegrationsManagedKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsManagedKafkaToHclTerraform(struct?: CloudGcpDmIntegrationsManagedKafkaOutputReference | CloudGcpDmIntegrationsManagedKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsManagedKafkaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsManagedKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsManagedKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsMemCache {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsMemCacheToTerraform(struct?: CloudGcpDmIntegrationsMemCacheOutputReference | CloudGcpDmIntegrationsMemCache): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsMemCacheToHclTerraform(struct?: CloudGcpDmIntegrationsMemCacheOutputReference | CloudGcpDmIntegrationsMemCache): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsMemCacheOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsMemCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsMemCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsMemoryStore {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsMemoryStoreToTerraform(struct?: CloudGcpDmIntegrationsMemoryStoreOutputReference | CloudGcpDmIntegrationsMemoryStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsMemoryStoreToHclTerraform(struct?: CloudGcpDmIntegrationsMemoryStoreOutputReference | CloudGcpDmIntegrationsMemoryStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsMemoryStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsMemoryStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsMemoryStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsPubSub {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsPubSubToTerraform(struct?: CloudGcpDmIntegrationsPubSubOutputReference | CloudGcpDmIntegrationsPubSub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsPubSubToHclTerraform(struct?: CloudGcpDmIntegrationsPubSubOutputReference | CloudGcpDmIntegrationsPubSub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsPubSubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsPubSub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsPubSub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsRedis {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsRedisToTerraform(struct?: CloudGcpDmIntegrationsRedisOutputReference | CloudGcpDmIntegrationsRedis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsRedisToHclTerraform(struct?: CloudGcpDmIntegrationsRedisOutputReference | CloudGcpDmIntegrationsRedis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsRedisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsRouter {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsRouterToTerraform(struct?: CloudGcpDmIntegrationsRouterOutputReference | CloudGcpDmIntegrationsRouter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsRouterToHclTerraform(struct?: CloudGcpDmIntegrationsRouterOutputReference | CloudGcpDmIntegrationsRouter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsRouterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsRun {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsRunToTerraform(struct?: CloudGcpDmIntegrationsRunOutputReference | CloudGcpDmIntegrationsRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsRunToHclTerraform(struct?: CloudGcpDmIntegrationsRunOutputReference | CloudGcpDmIntegrationsRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsSpanner {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsSpannerToTerraform(struct?: CloudGcpDmIntegrationsSpannerOutputReference | CloudGcpDmIntegrationsSpanner): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsSpannerToHclTerraform(struct?: CloudGcpDmIntegrationsSpannerOutputReference | CloudGcpDmIntegrationsSpanner): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsSpannerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsSpanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsSpanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsSql {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsSqlToTerraform(struct?: CloudGcpDmIntegrationsSqlOutputReference | CloudGcpDmIntegrationsSql): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsSqlToHclTerraform(struct?: CloudGcpDmIntegrationsSqlOutputReference | CloudGcpDmIntegrationsSql): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsSqlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsStorage {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsStorageToTerraform(struct?: CloudGcpDmIntegrationsStorageOutputReference | CloudGcpDmIntegrationsStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsStorageToHclTerraform(struct?: CloudGcpDmIntegrationsStorageOutputReference | CloudGcpDmIntegrationsStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsVirtualMachines {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsVirtualMachinesToTerraform(struct?: CloudGcpDmIntegrationsVirtualMachinesOutputReference | CloudGcpDmIntegrationsVirtualMachines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsVirtualMachinesToHclTerraform(struct?: CloudGcpDmIntegrationsVirtualMachinesOutputReference | CloudGcpDmIntegrationsVirtualMachines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsVirtualMachinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsVirtualMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsVirtualMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudGcpDmIntegrationsVpcAccess {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpDmIntegrationsVpcAccessToTerraform(struct?: CloudGcpDmIntegrationsVpcAccessOutputReference | CloudGcpDmIntegrationsVpcAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpDmIntegrationsVpcAccessToHclTerraform(struct?: CloudGcpDmIntegrationsVpcAccessOutputReference | CloudGcpDmIntegrationsVpcAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktn.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpDmIntegrationsVpcAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpDmIntegrationsVpcAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpDmIntegrationsVpcAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: true, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations newrelic_cloud_gcp_dm_integrations}
*/
export class CloudGcpDmIntegrations extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_gcp_dm_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGcpDmIntegrations to import
  * @param importFromId The id of the existing CloudGcpDmIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGcpDmIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_gcp_dm_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations newrelic_cloud_gcp_dm_integrations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGcpDmIntegrationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGcpDmIntegrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_gcp_dm_integrations',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.96.2',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._linkedAccountId = config.linkedAccountId;
    this._aiPlatform.internalValue = config.aiPlatform;
    this._alloyDb.internalValue = config.alloyDb;
    this._apiGateway.internalValue = config.apiGateway;
    this._appEngine.internalValue = config.appEngine;
    this._bigQuery.internalValue = config.bigQuery;
    this._bigTable.internalValue = config.bigTable;
    this._composer.internalValue = config.composer;
    this._dataFlow.internalValue = config.dataFlow;
    this._dataProc.internalValue = config.dataProc;
    this._dataStore.internalValue = config.dataStore;
    this._firebaseAppHosting.internalValue = config.firebaseAppHosting;
    this._firebaseAuth.internalValue = config.firebaseAuth;
    this._firebaseDatabase.internalValue = config.firebaseDatabase;
    this._firebaseHosting.internalValue = config.firebaseHosting;
    this._firebaseStorage.internalValue = config.firebaseStorage;
    this._firebaseVertexAi.internalValue = config.firebaseVertexAi;
    this._firestore.internalValue = config.firestore;
    this._functions.internalValue = config.functions;
    this._interconnect.internalValue = config.interconnect;
    this._istio.internalValue = config.istio;
    this._kubernetes.internalValue = config.kubernetes;
    this._loadBalancing.internalValue = config.loadBalancing;
    this._managedKafka.internalValue = config.managedKafka;
    this._memCache.internalValue = config.memCache;
    this._memoryStore.internalValue = config.memoryStore;
    this._pubSub.internalValue = config.pubSub;
    this._redis.internalValue = config.redis;
    this._router.internalValue = config.router;
    this._run.internalValue = config.run;
    this._spanner.internalValue = config.spanner;
    this._sql.internalValue = config.sql;
    this._storage.internalValue = config.storage;
    this._virtualMachines.internalValue = config.virtualMachines;
    this._vpcAccess.internalValue = config.vpcAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // linked_account_id - computed: false, optional: false, required: true
  private _linkedAccountId?: number; 
  public get linkedAccountId() {
    return this.getNumberAttribute('linked_account_id');
  }
  public set linkedAccountId(value: number) {
    this._linkedAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAccountIdInput() {
    return this._linkedAccountId;
  }

  // ai_platform - computed: false, optional: true, required: false
  private _aiPlatform = new CloudGcpDmIntegrationsAiPlatformOutputReference(this, "ai_platform");
  public get aiPlatform() {
    return this._aiPlatform;
  }
  public putAiPlatform(value: CloudGcpDmIntegrationsAiPlatform) {
    this._aiPlatform.internalValue = value;
  }
  public resetAiPlatform() {
    this._aiPlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiPlatformInput() {
    return this._aiPlatform.internalValue;
  }

  // alloy_db - computed: false, optional: true, required: false
  private _alloyDb = new CloudGcpDmIntegrationsAlloyDbOutputReference(this, "alloy_db");
  public get alloyDb() {
    return this._alloyDb;
  }
  public putAlloyDb(value: CloudGcpDmIntegrationsAlloyDb) {
    this._alloyDb.internalValue = value;
  }
  public resetAlloyDb() {
    this._alloyDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alloyDbInput() {
    return this._alloyDb.internalValue;
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new CloudGcpDmIntegrationsApiGatewayOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: CloudGcpDmIntegrationsApiGateway) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // app_engine - computed: false, optional: true, required: false
  private _appEngine = new CloudGcpDmIntegrationsAppEngineOutputReference(this, "app_engine");
  public get appEngine() {
    return this._appEngine;
  }
  public putAppEngine(value: CloudGcpDmIntegrationsAppEngine) {
    this._appEngine.internalValue = value;
  }
  public resetAppEngine() {
    this._appEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineInput() {
    return this._appEngine.internalValue;
  }

  // big_query - computed: false, optional: true, required: false
  private _bigQuery = new CloudGcpDmIntegrationsBigQueryOutputReference(this, "big_query");
  public get bigQuery() {
    return this._bigQuery;
  }
  public putBigQuery(value: CloudGcpDmIntegrationsBigQuery) {
    this._bigQuery.internalValue = value;
  }
  public resetBigQuery() {
    this._bigQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryInput() {
    return this._bigQuery.internalValue;
  }

  // big_table - computed: false, optional: true, required: false
  private _bigTable = new CloudGcpDmIntegrationsBigTableOutputReference(this, "big_table");
  public get bigTable() {
    return this._bigTable;
  }
  public putBigTable(value: CloudGcpDmIntegrationsBigTable) {
    this._bigTable.internalValue = value;
  }
  public resetBigTable() {
    this._bigTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigTableInput() {
    return this._bigTable.internalValue;
  }

  // composer - computed: false, optional: true, required: false
  private _composer = new CloudGcpDmIntegrationsComposerOutputReference(this, "composer");
  public get composer() {
    return this._composer;
  }
  public putComposer(value: CloudGcpDmIntegrationsComposer) {
    this._composer.internalValue = value;
  }
  public resetComposer() {
    this._composer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composerInput() {
    return this._composer.internalValue;
  }

  // data_flow - computed: false, optional: true, required: false
  private _dataFlow = new CloudGcpDmIntegrationsDataFlowOutputReference(this, "data_flow");
  public get dataFlow() {
    return this._dataFlow;
  }
  public putDataFlow(value: CloudGcpDmIntegrationsDataFlow) {
    this._dataFlow.internalValue = value;
  }
  public resetDataFlow() {
    this._dataFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFlowInput() {
    return this._dataFlow.internalValue;
  }

  // data_proc - computed: false, optional: true, required: false
  private _dataProc = new CloudGcpDmIntegrationsDataProcOutputReference(this, "data_proc");
  public get dataProc() {
    return this._dataProc;
  }
  public putDataProc(value: CloudGcpDmIntegrationsDataProc) {
    this._dataProc.internalValue = value;
  }
  public resetDataProc() {
    this._dataProc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProcInput() {
    return this._dataProc.internalValue;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore = new CloudGcpDmIntegrationsDataStoreOutputReference(this, "data_store");
  public get dataStore() {
    return this._dataStore;
  }
  public putDataStore(value: CloudGcpDmIntegrationsDataStore) {
    this._dataStore.internalValue = value;
  }
  public resetDataStore() {
    this._dataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore.internalValue;
  }

  // firebase_app_hosting - computed: false, optional: true, required: false
  private _firebaseAppHosting = new CloudGcpDmIntegrationsFirebaseAppHostingOutputReference(this, "firebase_app_hosting");
  public get firebaseAppHosting() {
    return this._firebaseAppHosting;
  }
  public putFirebaseAppHosting(value: CloudGcpDmIntegrationsFirebaseAppHosting) {
    this._firebaseAppHosting.internalValue = value;
  }
  public resetFirebaseAppHosting() {
    this._firebaseAppHosting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseAppHostingInput() {
    return this._firebaseAppHosting.internalValue;
  }

  // firebase_auth - computed: false, optional: true, required: false
  private _firebaseAuth = new CloudGcpDmIntegrationsFirebaseAuthOutputReference(this, "firebase_auth");
  public get firebaseAuth() {
    return this._firebaseAuth;
  }
  public putFirebaseAuth(value: CloudGcpDmIntegrationsFirebaseAuth) {
    this._firebaseAuth.internalValue = value;
  }
  public resetFirebaseAuth() {
    this._firebaseAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseAuthInput() {
    return this._firebaseAuth.internalValue;
  }

  // firebase_database - computed: false, optional: true, required: false
  private _firebaseDatabase = new CloudGcpDmIntegrationsFirebaseDatabaseOutputReference(this, "firebase_database");
  public get firebaseDatabase() {
    return this._firebaseDatabase;
  }
  public putFirebaseDatabase(value: CloudGcpDmIntegrationsFirebaseDatabase) {
    this._firebaseDatabase.internalValue = value;
  }
  public resetFirebaseDatabase() {
    this._firebaseDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseDatabaseInput() {
    return this._firebaseDatabase.internalValue;
  }

  // firebase_hosting - computed: false, optional: true, required: false
  private _firebaseHosting = new CloudGcpDmIntegrationsFirebaseHostingOutputReference(this, "firebase_hosting");
  public get firebaseHosting() {
    return this._firebaseHosting;
  }
  public putFirebaseHosting(value: CloudGcpDmIntegrationsFirebaseHosting) {
    this._firebaseHosting.internalValue = value;
  }
  public resetFirebaseHosting() {
    this._firebaseHosting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseHostingInput() {
    return this._firebaseHosting.internalValue;
  }

  // firebase_storage - computed: false, optional: true, required: false
  private _firebaseStorage = new CloudGcpDmIntegrationsFirebaseStorageOutputReference(this, "firebase_storage");
  public get firebaseStorage() {
    return this._firebaseStorage;
  }
  public putFirebaseStorage(value: CloudGcpDmIntegrationsFirebaseStorage) {
    this._firebaseStorage.internalValue = value;
  }
  public resetFirebaseStorage() {
    this._firebaseStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseStorageInput() {
    return this._firebaseStorage.internalValue;
  }

  // firebase_vertex_ai - computed: false, optional: true, required: false
  private _firebaseVertexAi = new CloudGcpDmIntegrationsFirebaseVertexAiOutputReference(this, "firebase_vertex_ai");
  public get firebaseVertexAi() {
    return this._firebaseVertexAi;
  }
  public putFirebaseVertexAi(value: CloudGcpDmIntegrationsFirebaseVertexAi) {
    this._firebaseVertexAi.internalValue = value;
  }
  public resetFirebaseVertexAi() {
    this._firebaseVertexAi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseVertexAiInput() {
    return this._firebaseVertexAi.internalValue;
  }

  // firestore - computed: false, optional: true, required: false
  private _firestore = new CloudGcpDmIntegrationsFirestoreOutputReference(this, "firestore");
  public get firestore() {
    return this._firestore;
  }
  public putFirestore(value: CloudGcpDmIntegrationsFirestore) {
    this._firestore.internalValue = value;
  }
  public resetFirestore() {
    this._firestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firestoreInput() {
    return this._firestore.internalValue;
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new CloudGcpDmIntegrationsFunctionsOutputReference(this, "functions");
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: CloudGcpDmIntegrationsFunctions) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect = new CloudGcpDmIntegrationsInterconnectOutputReference(this, "interconnect");
  public get interconnect() {
    return this._interconnect;
  }
  public putInterconnect(value: CloudGcpDmIntegrationsInterconnect) {
    this._interconnect.internalValue = value;
  }
  public resetInterconnect() {
    this._interconnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect.internalValue;
  }

  // istio - computed: false, optional: true, required: false
  private _istio = new CloudGcpDmIntegrationsIstioOutputReference(this, "istio");
  public get istio() {
    return this._istio;
  }
  public putIstio(value: CloudGcpDmIntegrationsIstio) {
    this._istio.internalValue = value;
  }
  public resetIstio() {
    this._istio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInput() {
    return this._istio.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new CloudGcpDmIntegrationsKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: CloudGcpDmIntegrationsKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // load_balancing - computed: false, optional: true, required: false
  private _loadBalancing = new CloudGcpDmIntegrationsLoadBalancingOutputReference(this, "load_balancing");
  public get loadBalancing() {
    return this._loadBalancing;
  }
  public putLoadBalancing(value: CloudGcpDmIntegrationsLoadBalancing) {
    this._loadBalancing.internalValue = value;
  }
  public resetLoadBalancing() {
    this._loadBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing.internalValue;
  }

  // managed_kafka - computed: false, optional: true, required: false
  private _managedKafka = new CloudGcpDmIntegrationsManagedKafkaOutputReference(this, "managed_kafka");
  public get managedKafka() {
    return this._managedKafka;
  }
  public putManagedKafka(value: CloudGcpDmIntegrationsManagedKafka) {
    this._managedKafka.internalValue = value;
  }
  public resetManagedKafka() {
    this._managedKafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKafkaInput() {
    return this._managedKafka.internalValue;
  }

  // mem_cache - computed: false, optional: true, required: false
  private _memCache = new CloudGcpDmIntegrationsMemCacheOutputReference(this, "mem_cache");
  public get memCache() {
    return this._memCache;
  }
  public putMemCache(value: CloudGcpDmIntegrationsMemCache) {
    this._memCache.internalValue = value;
  }
  public resetMemCache() {
    this._memCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memCacheInput() {
    return this._memCache.internalValue;
  }

  // memory_store - computed: false, optional: true, required: false
  private _memoryStore = new CloudGcpDmIntegrationsMemoryStoreOutputReference(this, "memory_store");
  public get memoryStore() {
    return this._memoryStore;
  }
  public putMemoryStore(value: CloudGcpDmIntegrationsMemoryStore) {
    this._memoryStore.internalValue = value;
  }
  public resetMemoryStore() {
    this._memoryStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStoreInput() {
    return this._memoryStore.internalValue;
  }

  // pub_sub - computed: false, optional: true, required: false
  private _pubSub = new CloudGcpDmIntegrationsPubSubOutputReference(this, "pub_sub");
  public get pubSub() {
    return this._pubSub;
  }
  public putPubSub(value: CloudGcpDmIntegrationsPubSub) {
    this._pubSub.internalValue = value;
  }
  public resetPubSub() {
    this._pubSub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubInput() {
    return this._pubSub.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new CloudGcpDmIntegrationsRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: CloudGcpDmIntegrationsRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new CloudGcpDmIntegrationsRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: CloudGcpDmIntegrationsRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CloudGcpDmIntegrationsRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CloudGcpDmIntegrationsRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // spanner - computed: false, optional: true, required: false
  private _spanner = new CloudGcpDmIntegrationsSpannerOutputReference(this, "spanner");
  public get spanner() {
    return this._spanner;
  }
  public putSpanner(value: CloudGcpDmIntegrationsSpanner) {
    this._spanner.internalValue = value;
  }
  public resetSpanner() {
    this._spanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerInput() {
    return this._spanner.internalValue;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new CloudGcpDmIntegrationsSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: CloudGcpDmIntegrationsSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new CloudGcpDmIntegrationsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: CloudGcpDmIntegrationsStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // virtual_machines - computed: false, optional: true, required: false
  private _virtualMachines = new CloudGcpDmIntegrationsVirtualMachinesOutputReference(this, "virtual_machines");
  public get virtualMachines() {
    return this._virtualMachines;
  }
  public putVirtualMachines(value: CloudGcpDmIntegrationsVirtualMachines) {
    this._virtualMachines.internalValue = value;
  }
  public resetVirtualMachines() {
    this._virtualMachines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachinesInput() {
    return this._virtualMachines.internalValue;
  }

  // vpc_access - computed: false, optional: true, required: false
  private _vpcAccess = new CloudGcpDmIntegrationsVpcAccessOutputReference(this, "vpc_access");
  public get vpcAccess() {
    return this._vpcAccess;
  }
  public putVpcAccess(value: CloudGcpDmIntegrationsVpcAccess) {
    this._vpcAccess.internalValue = value;
  }
  public resetVpcAccess() {
    this._vpcAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessInput() {
    return this._vpcAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      id: cdktn.stringToTerraform(this._id),
      linked_account_id: cdktn.numberToTerraform(this._linkedAccountId),
      ai_platform: cloudGcpDmIntegrationsAiPlatformToTerraform(this._aiPlatform.internalValue),
      alloy_db: cloudGcpDmIntegrationsAlloyDbToTerraform(this._alloyDb.internalValue),
      api_gateway: cloudGcpDmIntegrationsApiGatewayToTerraform(this._apiGateway.internalValue),
      app_engine: cloudGcpDmIntegrationsAppEngineToTerraform(this._appEngine.internalValue),
      big_query: cloudGcpDmIntegrationsBigQueryToTerraform(this._bigQuery.internalValue),
      big_table: cloudGcpDmIntegrationsBigTableToTerraform(this._bigTable.internalValue),
      composer: cloudGcpDmIntegrationsComposerToTerraform(this._composer.internalValue),
      data_flow: cloudGcpDmIntegrationsDataFlowToTerraform(this._dataFlow.internalValue),
      data_proc: cloudGcpDmIntegrationsDataProcToTerraform(this._dataProc.internalValue),
      data_store: cloudGcpDmIntegrationsDataStoreToTerraform(this._dataStore.internalValue),
      firebase_app_hosting: cloudGcpDmIntegrationsFirebaseAppHostingToTerraform(this._firebaseAppHosting.internalValue),
      firebase_auth: cloudGcpDmIntegrationsFirebaseAuthToTerraform(this._firebaseAuth.internalValue),
      firebase_database: cloudGcpDmIntegrationsFirebaseDatabaseToTerraform(this._firebaseDatabase.internalValue),
      firebase_hosting: cloudGcpDmIntegrationsFirebaseHostingToTerraform(this._firebaseHosting.internalValue),
      firebase_storage: cloudGcpDmIntegrationsFirebaseStorageToTerraform(this._firebaseStorage.internalValue),
      firebase_vertex_ai: cloudGcpDmIntegrationsFirebaseVertexAiToTerraform(this._firebaseVertexAi.internalValue),
      firestore: cloudGcpDmIntegrationsFirestoreToTerraform(this._firestore.internalValue),
      functions: cloudGcpDmIntegrationsFunctionsToTerraform(this._functions.internalValue),
      interconnect: cloudGcpDmIntegrationsInterconnectToTerraform(this._interconnect.internalValue),
      istio: cloudGcpDmIntegrationsIstioToTerraform(this._istio.internalValue),
      kubernetes: cloudGcpDmIntegrationsKubernetesToTerraform(this._kubernetes.internalValue),
      load_balancing: cloudGcpDmIntegrationsLoadBalancingToTerraform(this._loadBalancing.internalValue),
      managed_kafka: cloudGcpDmIntegrationsManagedKafkaToTerraform(this._managedKafka.internalValue),
      mem_cache: cloudGcpDmIntegrationsMemCacheToTerraform(this._memCache.internalValue),
      memory_store: cloudGcpDmIntegrationsMemoryStoreToTerraform(this._memoryStore.internalValue),
      pub_sub: cloudGcpDmIntegrationsPubSubToTerraform(this._pubSub.internalValue),
      redis: cloudGcpDmIntegrationsRedisToTerraform(this._redis.internalValue),
      router: cloudGcpDmIntegrationsRouterToTerraform(this._router.internalValue),
      run: cloudGcpDmIntegrationsRunToTerraform(this._run.internalValue),
      spanner: cloudGcpDmIntegrationsSpannerToTerraform(this._spanner.internalValue),
      sql: cloudGcpDmIntegrationsSqlToTerraform(this._sql.internalValue),
      storage: cloudGcpDmIntegrationsStorageToTerraform(this._storage.internalValue),
      virtual_machines: cloudGcpDmIntegrationsVirtualMachinesToTerraform(this._virtualMachines.internalValue),
      vpc_access: cloudGcpDmIntegrationsVpcAccessToTerraform(this._vpcAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_account_id: {
        value: cdktn.numberToHclTerraform(this._linkedAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ai_platform: {
        value: cloudGcpDmIntegrationsAiPlatformToHclTerraform(this._aiPlatform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsAiPlatformList",
      },
      alloy_db: {
        value: cloudGcpDmIntegrationsAlloyDbToHclTerraform(this._alloyDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsAlloyDbList",
      },
      api_gateway: {
        value: cloudGcpDmIntegrationsApiGatewayToHclTerraform(this._apiGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsApiGatewayList",
      },
      app_engine: {
        value: cloudGcpDmIntegrationsAppEngineToHclTerraform(this._appEngine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsAppEngineList",
      },
      big_query: {
        value: cloudGcpDmIntegrationsBigQueryToHclTerraform(this._bigQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsBigQueryList",
      },
      big_table: {
        value: cloudGcpDmIntegrationsBigTableToHclTerraform(this._bigTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsBigTableList",
      },
      composer: {
        value: cloudGcpDmIntegrationsComposerToHclTerraform(this._composer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsComposerList",
      },
      data_flow: {
        value: cloudGcpDmIntegrationsDataFlowToHclTerraform(this._dataFlow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsDataFlowList",
      },
      data_proc: {
        value: cloudGcpDmIntegrationsDataProcToHclTerraform(this._dataProc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsDataProcList",
      },
      data_store: {
        value: cloudGcpDmIntegrationsDataStoreToHclTerraform(this._dataStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsDataStoreList",
      },
      firebase_app_hosting: {
        value: cloudGcpDmIntegrationsFirebaseAppHostingToHclTerraform(this._firebaseAppHosting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirebaseAppHostingList",
      },
      firebase_auth: {
        value: cloudGcpDmIntegrationsFirebaseAuthToHclTerraform(this._firebaseAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirebaseAuthList",
      },
      firebase_database: {
        value: cloudGcpDmIntegrationsFirebaseDatabaseToHclTerraform(this._firebaseDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirebaseDatabaseList",
      },
      firebase_hosting: {
        value: cloudGcpDmIntegrationsFirebaseHostingToHclTerraform(this._firebaseHosting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirebaseHostingList",
      },
      firebase_storage: {
        value: cloudGcpDmIntegrationsFirebaseStorageToHclTerraform(this._firebaseStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirebaseStorageList",
      },
      firebase_vertex_ai: {
        value: cloudGcpDmIntegrationsFirebaseVertexAiToHclTerraform(this._firebaseVertexAi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirebaseVertexAiList",
      },
      firestore: {
        value: cloudGcpDmIntegrationsFirestoreToHclTerraform(this._firestore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFirestoreList",
      },
      functions: {
        value: cloudGcpDmIntegrationsFunctionsToHclTerraform(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsFunctionsList",
      },
      interconnect: {
        value: cloudGcpDmIntegrationsInterconnectToHclTerraform(this._interconnect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsInterconnectList",
      },
      istio: {
        value: cloudGcpDmIntegrationsIstioToHclTerraform(this._istio.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsIstioList",
      },
      kubernetes: {
        value: cloudGcpDmIntegrationsKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsKubernetesList",
      },
      load_balancing: {
        value: cloudGcpDmIntegrationsLoadBalancingToHclTerraform(this._loadBalancing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsLoadBalancingList",
      },
      managed_kafka: {
        value: cloudGcpDmIntegrationsManagedKafkaToHclTerraform(this._managedKafka.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsManagedKafkaList",
      },
      mem_cache: {
        value: cloudGcpDmIntegrationsMemCacheToHclTerraform(this._memCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsMemCacheList",
      },
      memory_store: {
        value: cloudGcpDmIntegrationsMemoryStoreToHclTerraform(this._memoryStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsMemoryStoreList",
      },
      pub_sub: {
        value: cloudGcpDmIntegrationsPubSubToHclTerraform(this._pubSub.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsPubSubList",
      },
      redis: {
        value: cloudGcpDmIntegrationsRedisToHclTerraform(this._redis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsRedisList",
      },
      router: {
        value: cloudGcpDmIntegrationsRouterToHclTerraform(this._router.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsRouterList",
      },
      run: {
        value: cloudGcpDmIntegrationsRunToHclTerraform(this._run.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsRunList",
      },
      spanner: {
        value: cloudGcpDmIntegrationsSpannerToHclTerraform(this._spanner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsSpannerList",
      },
      sql: {
        value: cloudGcpDmIntegrationsSqlToHclTerraform(this._sql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsSqlList",
      },
      storage: {
        value: cloudGcpDmIntegrationsStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsStorageList",
      },
      virtual_machines: {
        value: cloudGcpDmIntegrationsVirtualMachinesToHclTerraform(this._virtualMachines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsVirtualMachinesList",
      },
      vpc_access: {
        value: cloudGcpDmIntegrationsVpcAccessToHclTerraform(this._vpcAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpDmIntegrationsVpcAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
