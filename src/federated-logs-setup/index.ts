/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FederatedLogsSetupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID where the federated logs setup will live. Defaults to the provider's account_id. Changing this after creation is rejected by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}
  */
  readonly accountId?: number;
  /**
  * Whether the setup is active. When false, log routing to this setup is turned off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * The description of the federated log setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the federated log setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}
  */
  readonly name: string;
  /**
  * default_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}
  */
  readonly defaultPartition: FederatedLogsSetupDefaultPartition;
  /**
  * forwarder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}
  */
  readonly forwarder?: FederatedLogsSetupForwarder;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}
  */
  readonly storage: FederatedLogsSetupStorage;
}
export interface FederatedLogsSetupHealthCheckEnd2EndDataFlow {
}

export function federatedLogsSetupHealthCheckEnd2EndDataFlowToTerraform(struct?: FederatedLogsSetupHealthCheckEnd2EndDataFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function federatedLogsSetupHealthCheckEnd2EndDataFlowToHclTerraform(struct?: FederatedLogsSetupHealthCheckEnd2EndDataFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedLogsSetupHealthCheckEnd2EndDataFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupHealthCheckEnd2EndDataFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FederatedLogsSetupHealthCheckEnd2EndDataFlowList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference {
    return new FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsSetupHealthCheckQueryConnection {
}

export function federatedLogsSetupHealthCheckQueryConnectionToTerraform(struct?: FederatedLogsSetupHealthCheckQueryConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function federatedLogsSetupHealthCheckQueryConnectionToHclTerraform(struct?: FederatedLogsSetupHealthCheckQueryConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsSetupHealthCheckQueryConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedLogsSetupHealthCheckQueryConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupHealthCheckQueryConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FederatedLogsSetupHealthCheckQueryConnectionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedLogsSetupHealthCheckQueryConnectionOutputReference {
    return new FederatedLogsSetupHealthCheckQueryConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsSetupHealthCheck {
}

export function federatedLogsSetupHealthCheckToTerraform(struct?: FederatedLogsSetupHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function federatedLogsSetupHealthCheckToHclTerraform(struct?: FederatedLogsSetupHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsSetupHealthCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedLogsSetupHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end2end_data_flow - computed: true, optional: false, required: false
  private _end2EndDataFlow = new FederatedLogsSetupHealthCheckEnd2EndDataFlowList(this, "end2end_data_flow", false);
  public get end2EndDataFlow() {
    return this._end2EndDataFlow;
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // query_connection - computed: true, optional: false, required: false
  private _queryConnection = new FederatedLogsSetupHealthCheckQueryConnectionList(this, "query_connection", false);
  public get queryConnection() {
    return this._queryConnection;
  }
}

export class FederatedLogsSetupHealthCheckList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedLogsSetupHealthCheckOutputReference {
    return new FederatedLogsSetupHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsSetupLifecycleStatus {
}

export function federatedLogsSetupLifecycleStatusToTerraform(struct?: FederatedLogsSetupLifecycleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function federatedLogsSetupLifecycleStatusToHclTerraform(struct?: FederatedLogsSetupLifecycleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsSetupLifecycleStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedLogsSetupLifecycleStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupLifecycleStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FederatedLogsSetupLifecycleStatusList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedLogsSetupLifecycleStatusOutputReference {
    return new FederatedLogsSetupLifecycleStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsSetupDefaultPartitionDataRetentionPolicy {
  /**
  * The duration value for retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}
  */
  readonly duration: number;
  /**
  * The time unit for the retention duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}
  */
  readonly unit: string;
}

export function federatedLogsSetupDefaultPartitionDataRetentionPolicyToTerraform(struct?: FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference | FederatedLogsSetupDefaultPartitionDataRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function federatedLogsSetupDefaultPartitionDataRetentionPolicyToHclTerraform(struct?: FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference | FederatedLogsSetupDefaultPartitionDataRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupDefaultPartitionDataRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupDefaultPartitionDataRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface FederatedLogsSetupDefaultPartitionStorage {
  /**
  * The URI location of the partition in object storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}
  */
  readonly dataLocationUri: string;
  /**
  * The table name associated with the default partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}
  */
  readonly table: string;
}

export function federatedLogsSetupDefaultPartitionStorageToTerraform(struct?: FederatedLogsSetupDefaultPartitionStorageOutputReference | FederatedLogsSetupDefaultPartitionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_location_uri: cdktn.stringToTerraform(struct!.dataLocationUri),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function federatedLogsSetupDefaultPartitionStorageToHclTerraform(struct?: FederatedLogsSetupDefaultPartitionStorageOutputReference | FederatedLogsSetupDefaultPartitionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_location_uri: {
      value: cdktn.stringToHclTerraform(struct!.dataLocationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupDefaultPartitionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupDefaultPartitionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLocationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLocationUri = this._dataLocationUri;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupDefaultPartitionStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLocationUri = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLocationUri = value.dataLocationUri;
      this._table = value.table;
    }
  }

  // data_location_uri - computed: false, optional: false, required: true
  private _dataLocationUri?: string; 
  public get dataLocationUri() {
    return this.getStringAttribute('data_location_uri');
  }
  public set dataLocationUri(value: string) {
    this._dataLocationUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationUriInput() {
    return this._dataLocationUri;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface FederatedLogsSetupDefaultPartition {
  /**
  * data_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}
  */
  readonly dataRetentionPolicy?: FederatedLogsSetupDefaultPartitionDataRetentionPolicy;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}
  */
  readonly storage: FederatedLogsSetupDefaultPartitionStorage;
}

export function federatedLogsSetupDefaultPartitionToTerraform(struct?: FederatedLogsSetupDefaultPartitionOutputReference | FederatedLogsSetupDefaultPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_retention_policy: federatedLogsSetupDefaultPartitionDataRetentionPolicyToTerraform(struct!.dataRetentionPolicy),
    storage: federatedLogsSetupDefaultPartitionStorageToTerraform(struct!.storage),
  }
}


export function federatedLogsSetupDefaultPartitionToHclTerraform(struct?: FederatedLogsSetupDefaultPartitionOutputReference | FederatedLogsSetupDefaultPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_retention_policy: {
      value: federatedLogsSetupDefaultPartitionDataRetentionPolicyToHclTerraform(struct!.dataRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsSetupDefaultPartitionDataRetentionPolicyList",
    },
    storage: {
      value: federatedLogsSetupDefaultPartitionStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsSetupDefaultPartitionStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupDefaultPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupDefaultPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRetentionPolicy = this._dataRetentionPolicy?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupDefaultPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataRetentionPolicy.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataRetentionPolicy.internalValue = value.dataRetentionPolicy;
      this._storage.internalValue = value.storage;
    }
  }

  // data_retention_policy - computed: false, optional: true, required: false
  private _dataRetentionPolicy = new FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference(this, "data_retention_policy");
  public get dataRetentionPolicy() {
    return this._dataRetentionPolicy;
  }
  public putDataRetentionPolicy(value: FederatedLogsSetupDefaultPartitionDataRetentionPolicy) {
    this._dataRetentionPolicy.internalValue = value;
  }
  public resetDataRetentionPolicy() {
    this._dataRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionPolicyInput() {
    return this._dataRetentionPolicy.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new FederatedLogsSetupDefaultPartitionStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: FederatedLogsSetupDefaultPartitionStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface FederatedLogsSetupForwarderPipelineControlRoutingRule {
  /**
  * OTTL expression for routing logs to this setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}
  */
  readonly expression: string;
}

export function federatedLogsSetupForwarderPipelineControlRoutingRuleToTerraform(struct?: FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference | FederatedLogsSetupForwarderPipelineControlRoutingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function federatedLogsSetupForwarderPipelineControlRoutingRuleToHclTerraform(struct?: FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference | FederatedLogsSetupForwarderPipelineControlRoutingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupForwarderPipelineControlRoutingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupForwarderPipelineControlRoutingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface FederatedLogsSetupForwarderPipelineControl {
  /**
  * The fleet entity GUID used for deploying the pipeline configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}
  */
  readonly fleetId: string;
  /**
  * routing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}
  */
  readonly routingRule?: FederatedLogsSetupForwarderPipelineControlRoutingRule;
}

export function federatedLogsSetupForwarderPipelineControlToTerraform(struct?: FederatedLogsSetupForwarderPipelineControlOutputReference | FederatedLogsSetupForwarderPipelineControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fleet_id: cdktn.stringToTerraform(struct!.fleetId),
    routing_rule: federatedLogsSetupForwarderPipelineControlRoutingRuleToTerraform(struct!.routingRule),
  }
}


export function federatedLogsSetupForwarderPipelineControlToHclTerraform(struct?: FederatedLogsSetupForwarderPipelineControlOutputReference | FederatedLogsSetupForwarderPipelineControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fleet_id: {
      value: cdktn.stringToHclTerraform(struct!.fleetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_rule: {
      value: federatedLogsSetupForwarderPipelineControlRoutingRuleToHclTerraform(struct!.routingRule),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsSetupForwarderPipelineControlRoutingRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupForwarderPipelineControlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupForwarderPipelineControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetId = this._fleetId;
    }
    if (this._routingRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRule = this._routingRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupForwarderPipelineControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fleetId = undefined;
      this._routingRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetId = value.fleetId;
      this._routingRule.internalValue = value.routingRule;
    }
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // routing_rule - computed: false, optional: true, required: false
  private _routingRule = new FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference(this, "routing_rule");
  public get routingRule() {
    return this._routingRule;
  }
  public putRoutingRule(value: FederatedLogsSetupForwarderPipelineControlRoutingRule) {
    this._routingRule.internalValue = value;
  }
  public resetRoutingRule() {
    this._routingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule.internalValue;
  }
}
export interface FederatedLogsSetupForwarder {
  /**
  * The type of forwarder. Currently only PIPELINE_CONTROL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}
  */
  readonly type: string;
  /**
  * pipeline_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}
  */
  readonly pipelineControl?: FederatedLogsSetupForwarderPipelineControl;
}

export function federatedLogsSetupForwarderToTerraform(struct?: FederatedLogsSetupForwarderOutputReference | FederatedLogsSetupForwarder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    pipeline_control: federatedLogsSetupForwarderPipelineControlToTerraform(struct!.pipelineControl),
  }
}


export function federatedLogsSetupForwarderToHclTerraform(struct?: FederatedLogsSetupForwarderOutputReference | FederatedLogsSetupForwarder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_control: {
      value: federatedLogsSetupForwarderPipelineControlToHclTerraform(struct!.pipelineControl),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsSetupForwarderPipelineControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupForwarderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupForwarder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._pipelineControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineControl = this._pipelineControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupForwarder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._pipelineControl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._pipelineControl.internalValue = value.pipelineControl;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // pipeline_control - computed: false, optional: true, required: false
  private _pipelineControl = new FederatedLogsSetupForwarderPipelineControlOutputReference(this, "pipeline_control");
  public get pipelineControl() {
    return this._pipelineControl;
  }
  public putPipelineControl(value: FederatedLogsSetupForwarderPipelineControl) {
    this._pipelineControl.internalValue = value;
  }
  public resetPipelineControl() {
    this._pipelineControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineControlInput() {
    return this._pipelineControl.internalValue;
  }
}
export interface FederatedLogsSetupStorageCloudProviderConfiguration {
  /**
  * The cloud provider. Currently only AWS is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}
  */
  readonly provider: string;
  /**
  * The cloud provider region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}
  */
  readonly region: string;
}

export function federatedLogsSetupStorageCloudProviderConfigurationToTerraform(struct?: FederatedLogsSetupStorageCloudProviderConfigurationOutputReference | FederatedLogsSetupStorageCloudProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function federatedLogsSetupStorageCloudProviderConfigurationToHclTerraform(struct?: FederatedLogsSetupStorageCloudProviderConfigurationOutputReference | FederatedLogsSetupStorageCloudProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupStorageCloudProviderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupStorageCloudProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupStorageCloudProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._region = value.region;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FederatedLogsSetupStorage {
  /**
  * The connection manager entity GUID used for writing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}
  */
  readonly dataIngestConnectionId: string;
  /**
  * The object storage bucket where log data is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}
  */
  readonly dataLocationBucket: string;
  /**
  * The database name associated with the federated log setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}
  */
  readonly database: string;
  /**
  * The connection manager entity GUID used by query workers for reading data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}
  */
  readonly queryConnectionId: string;
  /**
  * cloud_provider_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}
  */
  readonly cloudProviderConfiguration: FederatedLogsSetupStorageCloudProviderConfiguration;
}

export function federatedLogsSetupStorageToTerraform(struct?: FederatedLogsSetupStorageOutputReference | FederatedLogsSetupStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_ingest_connection_id: cdktn.stringToTerraform(struct!.dataIngestConnectionId),
    data_location_bucket: cdktn.stringToTerraform(struct!.dataLocationBucket),
    database: cdktn.stringToTerraform(struct!.database),
    query_connection_id: cdktn.stringToTerraform(struct!.queryConnectionId),
    cloud_provider_configuration: federatedLogsSetupStorageCloudProviderConfigurationToTerraform(struct!.cloudProviderConfiguration),
  }
}


export function federatedLogsSetupStorageToHclTerraform(struct?: FederatedLogsSetupStorageOutputReference | FederatedLogsSetupStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_ingest_connection_id: {
      value: cdktn.stringToHclTerraform(struct!.dataIngestConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_location_bucket: {
      value: cdktn.stringToHclTerraform(struct!.dataLocationBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_connection_id: {
      value: cdktn.stringToHclTerraform(struct!.queryConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_configuration: {
      value: federatedLogsSetupStorageCloudProviderConfigurationToHclTerraform(struct!.cloudProviderConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsSetupStorageCloudProviderConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsSetupStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsSetupStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataIngestConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIngestConnectionId = this._dataIngestConnectionId;
    }
    if (this._dataLocationBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLocationBucket = this._dataLocationBucket;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._queryConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryConnectionId = this._queryConnectionId;
    }
    if (this._cloudProviderConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderConfiguration = this._cloudProviderConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsSetupStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataIngestConnectionId = undefined;
      this._dataLocationBucket = undefined;
      this._database = undefined;
      this._queryConnectionId = undefined;
      this._cloudProviderConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataIngestConnectionId = value.dataIngestConnectionId;
      this._dataLocationBucket = value.dataLocationBucket;
      this._database = value.database;
      this._queryConnectionId = value.queryConnectionId;
      this._cloudProviderConfiguration.internalValue = value.cloudProviderConfiguration;
    }
  }

  // data_ingest_connection_id - computed: false, optional: false, required: true
  private _dataIngestConnectionId?: string; 
  public get dataIngestConnectionId() {
    return this.getStringAttribute('data_ingest_connection_id');
  }
  public set dataIngestConnectionId(value: string) {
    this._dataIngestConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIngestConnectionIdInput() {
    return this._dataIngestConnectionId;
  }

  // data_location_bucket - computed: false, optional: false, required: true
  private _dataLocationBucket?: string; 
  public get dataLocationBucket() {
    return this.getStringAttribute('data_location_bucket');
  }
  public set dataLocationBucket(value: string) {
    this._dataLocationBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationBucketInput() {
    return this._dataLocationBucket;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // query_connection_id - computed: false, optional: false, required: true
  private _queryConnectionId?: string; 
  public get queryConnectionId() {
    return this.getStringAttribute('query_connection_id');
  }
  public set queryConnectionId(value: string) {
    this._queryConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryConnectionIdInput() {
    return this._queryConnectionId;
  }

  // cloud_provider_configuration - computed: false, optional: false, required: true
  private _cloudProviderConfiguration = new FederatedLogsSetupStorageCloudProviderConfigurationOutputReference(this, "cloud_provider_configuration");
  public get cloudProviderConfiguration() {
    return this._cloudProviderConfiguration;
  }
  public putCloudProviderConfiguration(value: FederatedLogsSetupStorageCloudProviderConfiguration) {
    this._cloudProviderConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderConfigurationInput() {
    return this._cloudProviderConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup newrelic_federated_logs_setup}
*/
export class FederatedLogsSetup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_federated_logs_setup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedLogsSetup to import
  * @param importFromId The id of the existing FederatedLogsSetup that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedLogsSetup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_federated_logs_setup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup newrelic_federated_logs_setup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedLogsSetupConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedLogsSetupConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_federated_logs_setup',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.92.0',
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
    this._active = config.active;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._defaultPartition.internalValue = config.defaultPartition;
    this._forwarder.internalValue = config.forwarder;
    this._storage.internalValue = config.storage;
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

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktn.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktn.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_partition_id - computed: true, optional: false, required: false
  public get defaultPartitionId() {
    return this.getStringAttribute('default_partition_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new FederatedLogsSetupHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
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

  // lifecycle_status - computed: true, optional: false, required: false
  private _lifecycleStatus = new FederatedLogsSetupLifecycleStatusList(this, "lifecycle_status", false);
  public get lifecycleStatus() {
    return this._lifecycleStatus;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // default_partition - computed: false, optional: false, required: true
  private _defaultPartition = new FederatedLogsSetupDefaultPartitionOutputReference(this, "default_partition");
  public get defaultPartition() {
    return this._defaultPartition;
  }
  public putDefaultPartition(value: FederatedLogsSetupDefaultPartition) {
    this._defaultPartition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionInput() {
    return this._defaultPartition.internalValue;
  }

  // forwarder - computed: false, optional: true, required: false
  private _forwarder = new FederatedLogsSetupForwarderOutputReference(this, "forwarder");
  public get forwarder() {
    return this._forwarder;
  }
  public putForwarder(value: FederatedLogsSetupForwarder) {
    this._forwarder.internalValue = value;
  }
  public resetForwarder() {
    this._forwarder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwarderInput() {
    return this._forwarder.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new FederatedLogsSetupStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: FederatedLogsSetupStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      active: cdktn.booleanToTerraform(this._active),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      default_partition: federatedLogsSetupDefaultPartitionToTerraform(this._defaultPartition.internalValue),
      forwarder: federatedLogsSetupForwarderToTerraform(this._forwarder.internalValue),
      storage: federatedLogsSetupStorageToTerraform(this._storage.internalValue),
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
      active: {
        value: cdktn.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_partition: {
        value: federatedLogsSetupDefaultPartitionToHclTerraform(this._defaultPartition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederatedLogsSetupDefaultPartitionList",
      },
      forwarder: {
        value: federatedLogsSetupForwarderToHclTerraform(this._forwarder.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederatedLogsSetupForwarderList",
      },
      storage: {
        value: federatedLogsSetupStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederatedLogsSetupStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
