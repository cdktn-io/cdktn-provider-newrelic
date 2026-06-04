/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FederatedLogsPartitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID where the federated logs partition will live. Defaults to the provider's account_id. Changing this after creation is rejected by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}
  */
  readonly accountId?: number;
  /**
  * Whether the partition is active. When false, log routing to this partition is turned off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * The description of the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}
  */
  readonly name: string;
  /**
  * The ID of the federated log setup this partition belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}
  */
  readonly setupId: string;
  /**
  * data_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}
  */
  readonly dataRetentionPolicy?: FederatedLogsPartitionDataRetentionPolicy;
  /**
  * forwarder_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}
  */
  readonly forwarderConfiguration?: FederatedLogsPartitionForwarderConfiguration;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}
  */
  readonly storage: FederatedLogsPartitionStorage;
}
export interface FederatedLogsPartitionHealthCheckEnd2EndDataFlow {
}

export function federatedLogsPartitionHealthCheckEnd2EndDataFlowToTerraform(struct?: FederatedLogsPartitionHealthCheckEnd2EndDataFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function federatedLogsPartitionHealthCheckEnd2EndDataFlowToHclTerraform(struct?: FederatedLogsPartitionHealthCheckEnd2EndDataFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FederatedLogsPartitionHealthCheckEnd2EndDataFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsPartitionHealthCheckEnd2EndDataFlow | undefined) {
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

export class FederatedLogsPartitionHealthCheckEnd2EndDataFlowList extends cdktn.ComplexList {

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
  public get(index: number): FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference {
    return new FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsPartitionHealthCheckQueryConnection {
}

export function federatedLogsPartitionHealthCheckQueryConnectionToTerraform(struct?: FederatedLogsPartitionHealthCheckQueryConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function federatedLogsPartitionHealthCheckQueryConnectionToHclTerraform(struct?: FederatedLogsPartitionHealthCheckQueryConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsPartitionHealthCheckQueryConnectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FederatedLogsPartitionHealthCheckQueryConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsPartitionHealthCheckQueryConnection | undefined) {
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

export class FederatedLogsPartitionHealthCheckQueryConnectionList extends cdktn.ComplexList {

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
  public get(index: number): FederatedLogsPartitionHealthCheckQueryConnectionOutputReference {
    return new FederatedLogsPartitionHealthCheckQueryConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsPartitionHealthCheck {
}

export function federatedLogsPartitionHealthCheckToTerraform(struct?: FederatedLogsPartitionHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function federatedLogsPartitionHealthCheckToHclTerraform(struct?: FederatedLogsPartitionHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsPartitionHealthCheckOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FederatedLogsPartitionHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsPartitionHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end2end_data_flow - computed: true, optional: false, required: false
  private _end2EndDataFlow = new FederatedLogsPartitionHealthCheckEnd2EndDataFlowList(this, "end2end_data_flow", false);
  public get end2EndDataFlow() {
    return this._end2EndDataFlow;
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // query_connection - computed: true, optional: false, required: false
  private _queryConnection = new FederatedLogsPartitionHealthCheckQueryConnectionList(this, "query_connection", false);
  public get queryConnection() {
    return this._queryConnection;
  }
}

export class FederatedLogsPartitionHealthCheckList extends cdktn.ComplexList {

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
  public get(index: number): FederatedLogsPartitionHealthCheckOutputReference {
    return new FederatedLogsPartitionHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsPartitionLifecycleStatus {
}

export function federatedLogsPartitionLifecycleStatusToTerraform(struct?: FederatedLogsPartitionLifecycleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function federatedLogsPartitionLifecycleStatusToHclTerraform(struct?: FederatedLogsPartitionLifecycleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedLogsPartitionLifecycleStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FederatedLogsPartitionLifecycleStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsPartitionLifecycleStatus | undefined) {
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

export class FederatedLogsPartitionLifecycleStatusList extends cdktn.ComplexList {

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
  public get(index: number): FederatedLogsPartitionLifecycleStatusOutputReference {
    return new FederatedLogsPartitionLifecycleStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedLogsPartitionDataRetentionPolicy {
  /**
  * The duration value for retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#duration FederatedLogsPartition#duration}
  */
  readonly duration: number;
  /**
  * The time unit for the retention duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#unit FederatedLogsPartition#unit}
  */
  readonly unit: string;
}

export function federatedLogsPartitionDataRetentionPolicyToTerraform(struct?: FederatedLogsPartitionDataRetentionPolicyOutputReference | FederatedLogsPartitionDataRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function federatedLogsPartitionDataRetentionPolicyToHclTerraform(struct?: FederatedLogsPartitionDataRetentionPolicyOutputReference | FederatedLogsPartitionDataRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FederatedLogsPartitionDataRetentionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsPartitionDataRetentionPolicy | undefined {
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

  public set internalValue(value: FederatedLogsPartitionDataRetentionPolicy | undefined) {
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
export interface FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule {
  /**
  * OTTL expression for routing logs to this partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#expression FederatedLogsPartition#expression}
  */
  readonly expression: string;
}

export function federatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleToTerraform(struct?: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference | FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function federatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleToHclTerraform(struct?: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference | FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule | undefined) {
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
export interface FederatedLogsPartitionForwarderConfigurationPipelineControl {
  /**
  * partition_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#partition_rule FederatedLogsPartition#partition_rule}
  */
  readonly partitionRule?: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule;
}

export function federatedLogsPartitionForwarderConfigurationPipelineControlToTerraform(struct?: FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference | FederatedLogsPartitionForwarderConfigurationPipelineControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_rule: federatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleToTerraform(struct!.partitionRule),
  }
}


export function federatedLogsPartitionForwarderConfigurationPipelineControlToHclTerraform(struct?: FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference | FederatedLogsPartitionForwarderConfigurationPipelineControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_rule: {
      value: federatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleToHclTerraform(struct!.partitionRule),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsPartitionForwarderConfigurationPipelineControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionRule = this._partitionRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedLogsPartitionForwarderConfigurationPipelineControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionRule.internalValue = value.partitionRule;
    }
  }

  // partition_rule - computed: false, optional: true, required: false
  private _partitionRule = new FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference(this, "partition_rule");
  public get partitionRule() {
    return this._partitionRule;
  }
  public putPartitionRule(value: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule) {
    this._partitionRule.internalValue = value;
  }
  public resetPartitionRule() {
    this._partitionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionRuleInput() {
    return this._partitionRule.internalValue;
  }
}
export interface FederatedLogsPartitionForwarderConfiguration {
  /**
  * The type of forwarder. Must match the parent setup's forwarder type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#type FederatedLogsPartition#type}
  */
  readonly type: string;
  /**
  * pipeline_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#pipeline_control FederatedLogsPartition#pipeline_control}
  */
  readonly pipelineControl?: FederatedLogsPartitionForwarderConfigurationPipelineControl;
}

export function federatedLogsPartitionForwarderConfigurationToTerraform(struct?: FederatedLogsPartitionForwarderConfigurationOutputReference | FederatedLogsPartitionForwarderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    pipeline_control: federatedLogsPartitionForwarderConfigurationPipelineControlToTerraform(struct!.pipelineControl),
  }
}


export function federatedLogsPartitionForwarderConfigurationToHclTerraform(struct?: FederatedLogsPartitionForwarderConfigurationOutputReference | FederatedLogsPartitionForwarderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_control: {
      value: federatedLogsPartitionForwarderConfigurationPipelineControlToHclTerraform(struct!.pipelineControl),
      isBlock: true,
      type: "list",
      storageClassType: "FederatedLogsPartitionForwarderConfigurationPipelineControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedLogsPartitionForwarderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsPartitionForwarderConfiguration | undefined {
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

  public set internalValue(value: FederatedLogsPartitionForwarderConfiguration | undefined) {
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
  private _pipelineControl = new FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference(this, "pipeline_control");
  public get pipelineControl() {
    return this._pipelineControl;
  }
  public putPipelineControl(value: FederatedLogsPartitionForwarderConfigurationPipelineControl) {
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
export interface FederatedLogsPartitionStorage {
  /**
  * The URI location of the partition in object storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#data_location_uri FederatedLogsPartition#data_location_uri}
  */
  readonly dataLocationUri: string;
  /**
  * The table name associated with the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#table FederatedLogsPartition#table}
  */
  readonly table: string;
}

export function federatedLogsPartitionStorageToTerraform(struct?: FederatedLogsPartitionStorageOutputReference | FederatedLogsPartitionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_location_uri: cdktn.stringToTerraform(struct!.dataLocationUri),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function federatedLogsPartitionStorageToHclTerraform(struct?: FederatedLogsPartitionStorageOutputReference | FederatedLogsPartitionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FederatedLogsPartitionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedLogsPartitionStorage | undefined {
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

  public set internalValue(value: FederatedLogsPartitionStorage | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition newrelic_federated_logs_partition}
*/
export class FederatedLogsPartition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_federated_logs_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedLogsPartition to import
  * @param importFromId The id of the existing FederatedLogsPartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedLogsPartition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_federated_logs_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/federated_logs_partition newrelic_federated_logs_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedLogsPartitionConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedLogsPartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_federated_logs_partition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.91.0',
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
    this._setupId = config.setupId;
    this._dataRetentionPolicy.internalValue = config.dataRetentionPolicy;
    this._forwarderConfiguration.internalValue = config.forwarderConfiguration;
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
  private _healthCheck = new FederatedLogsPartitionHealthCheckList(this, "health_check", false);
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // lifecycle_status - computed: true, optional: false, required: false
  private _lifecycleStatus = new FederatedLogsPartitionLifecycleStatusList(this, "lifecycle_status", false);
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

  // setup_id - computed: false, optional: false, required: true
  private _setupId?: string; 
  public get setupId() {
    return this.getStringAttribute('setup_id');
  }
  public set setupId(value: string) {
    this._setupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setupIdInput() {
    return this._setupId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // data_retention_policy - computed: false, optional: true, required: false
  private _dataRetentionPolicy = new FederatedLogsPartitionDataRetentionPolicyOutputReference(this, "data_retention_policy");
  public get dataRetentionPolicy() {
    return this._dataRetentionPolicy;
  }
  public putDataRetentionPolicy(value: FederatedLogsPartitionDataRetentionPolicy) {
    this._dataRetentionPolicy.internalValue = value;
  }
  public resetDataRetentionPolicy() {
    this._dataRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionPolicyInput() {
    return this._dataRetentionPolicy.internalValue;
  }

  // forwarder_configuration - computed: false, optional: true, required: false
  private _forwarderConfiguration = new FederatedLogsPartitionForwarderConfigurationOutputReference(this, "forwarder_configuration");
  public get forwarderConfiguration() {
    return this._forwarderConfiguration;
  }
  public putForwarderConfiguration(value: FederatedLogsPartitionForwarderConfiguration) {
    this._forwarderConfiguration.internalValue = value;
  }
  public resetForwarderConfiguration() {
    this._forwarderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwarderConfigurationInput() {
    return this._forwarderConfiguration.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new FederatedLogsPartitionStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: FederatedLogsPartitionStorage) {
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
      setup_id: cdktn.stringToTerraform(this._setupId),
      data_retention_policy: federatedLogsPartitionDataRetentionPolicyToTerraform(this._dataRetentionPolicy.internalValue),
      forwarder_configuration: federatedLogsPartitionForwarderConfigurationToTerraform(this._forwarderConfiguration.internalValue),
      storage: federatedLogsPartitionStorageToTerraform(this._storage.internalValue),
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
      setup_id: {
        value: cdktn.stringToHclTerraform(this._setupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_retention_policy: {
        value: federatedLogsPartitionDataRetentionPolicyToHclTerraform(this._dataRetentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederatedLogsPartitionDataRetentionPolicyList",
      },
      forwarder_configuration: {
        value: federatedLogsPartitionForwarderConfigurationToHclTerraform(this._forwarderConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederatedLogsPartitionForwarderConfigurationList",
      },
      storage: {
        value: federatedLogsPartitionStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederatedLogsPartitionStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
