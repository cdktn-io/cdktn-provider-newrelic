/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataPartitionRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The account id associated with the data partition rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#account_id DataPartitionRule#account_id}
  */
  readonly accountId?: number;
  /**
  * The description of the data partition rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#description DataPartitionRule#description}
  */
  readonly description?: string;
  /**
  * Whether or not this data partition rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#enabled DataPartitionRule#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#id DataPartitionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The NRQL to match events for this data partition rule. Logs matching this criteria will be routed to the specified data partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#nrql DataPartitionRule#nrql}
  */
  readonly nrql: string;
  /**
  * The retention policy of the data partition data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#retention_policy DataPartitionRule#retention_policy}
  */
  readonly retentionPolicy: string;
  /**
  * The name of the data partition where logs will be allocated once the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#target_data_partition DataPartitionRule#target_data_partition}
  */
  readonly targetDataPartition: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#timeouts DataPartitionRule#timeouts}
  */
  readonly timeouts?: DataPartitionRuleTimeouts;
}
export interface DataPartitionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#create DataPartitionRule#create}
  */
  readonly create?: string;
}

export function dataPartitionRuleTimeoutsToTerraform(struct?: DataPartitionRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function dataPartitionRuleTimeoutsToHclTerraform(struct?: DataPartitionRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPartitionRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPartitionRuleTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPartitionRuleTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule newrelic_data_partition_rule}
*/
export class DataPartitionRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_data_partition_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataPartitionRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPartitionRule to import
  * @param importFromId The id of the existing DataPartitionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPartitionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_data_partition_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/data_partition_rule newrelic_data_partition_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPartitionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataPartitionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_data_partition_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.81.0',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._nrql = config.nrql;
    this._retentionPolicy = config.retentionPolicy;
    this._targetDataPartition = config.targetDataPartition;
    this._timeouts.internalValue = config.timeouts;
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

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }

  // retention_policy - computed: false, optional: false, required: true
  private _retentionPolicy?: string; 
  public get retentionPolicy() {
    return this.getStringAttribute('retention_policy');
  }
  public set retentionPolicy(value: string) {
    this._retentionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy;
  }

  // target_data_partition - computed: false, optional: false, required: true
  private _targetDataPartition?: string; 
  public get targetDataPartition() {
    return this.getStringAttribute('target_data_partition');
  }
  public set targetDataPartition(value: string) {
    this._targetDataPartition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDataPartitionInput() {
    return this._targetDataPartition;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPartitionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPartitionRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      nrql: cdktn.stringToTerraform(this._nrql),
      retention_policy: cdktn.stringToTerraform(this._retentionPolicy),
      target_data_partition: cdktn.stringToTerraform(this._targetDataPartition),
      timeouts: dataPartitionRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nrql: {
        value: cdktn.stringToHclTerraform(this._nrql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_policy: {
        value: cdktn.stringToHclTerraform(this._retentionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_data_partition: {
        value: cdktn.stringToHclTerraform(this._targetDataPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataPartitionRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPartitionRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
