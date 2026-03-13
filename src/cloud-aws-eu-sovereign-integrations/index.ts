/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudAwsEuSovereignIntegrationsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the linked AWS EU Sovereign account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * billing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}
  */
  readonly billing?: CloudAwsEuSovereignIntegrationsBilling;
  /**
  * cloudtrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}
  */
  readonly cloudtrail?: CloudAwsEuSovereignIntegrationsCloudtrail;
  /**
  * x_ray block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}
  */
  readonly xRay?: CloudAwsEuSovereignIntegrationsXRay;
}
export interface CloudAwsEuSovereignIntegrationsBilling {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsEuSovereignIntegrationsBillingToTerraform(struct?: CloudAwsEuSovereignIntegrationsBillingOutputReference | CloudAwsEuSovereignIntegrationsBilling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsEuSovereignIntegrationsBillingToHclTerraform(struct?: CloudAwsEuSovereignIntegrationsBillingOutputReference | CloudAwsEuSovereignIntegrationsBilling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class CloudAwsEuSovereignIntegrationsBillingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsEuSovereignIntegrationsBilling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsEuSovereignIntegrationsBilling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
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
export interface CloudAwsEuSovereignIntegrationsCloudtrail {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsEuSovereignIntegrationsCloudtrailToTerraform(struct?: CloudAwsEuSovereignIntegrationsCloudtrailOutputReference | CloudAwsEuSovereignIntegrationsCloudtrail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsEuSovereignIntegrationsCloudtrailToHclTerraform(struct?: CloudAwsEuSovereignIntegrationsCloudtrailOutputReference | CloudAwsEuSovereignIntegrationsCloudtrail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class CloudAwsEuSovereignIntegrationsCloudtrailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsEuSovereignIntegrationsCloudtrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsEuSovereignIntegrationsCloudtrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
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
export interface CloudAwsEuSovereignIntegrationsXRay {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsEuSovereignIntegrationsXRayToTerraform(struct?: CloudAwsEuSovereignIntegrationsXRayOutputReference | CloudAwsEuSovereignIntegrationsXRay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktn.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsEuSovereignIntegrationsXRayToHclTerraform(struct?: CloudAwsEuSovereignIntegrationsXRayOutputReference | CloudAwsEuSovereignIntegrationsXRay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class CloudAwsEuSovereignIntegrationsXRayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsEuSovereignIntegrationsXRay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsEuSovereignIntegrationsXRay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations newrelic_cloud_aws_eu_sovereign_integrations}
*/
export class CloudAwsEuSovereignIntegrations extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_eu_sovereign_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsEuSovereignIntegrations to import
  * @param importFromId The id of the existing CloudAwsEuSovereignIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsEuSovereignIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_aws_eu_sovereign_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations newrelic_cloud_aws_eu_sovereign_integrations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsEuSovereignIntegrationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsEuSovereignIntegrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_aws_eu_sovereign_integrations',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.80.3',
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
    this._billing.internalValue = config.billing;
    this._cloudtrail.internalValue = config.cloudtrail;
    this._xRay.internalValue = config.xRay;
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

  // billing - computed: false, optional: true, required: false
  private _billing = new CloudAwsEuSovereignIntegrationsBillingOutputReference(this, "billing");
  public get billing() {
    return this._billing;
  }
  public putBilling(value: CloudAwsEuSovereignIntegrationsBilling) {
    this._billing.internalValue = value;
  }
  public resetBilling() {
    this._billing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInput() {
    return this._billing.internalValue;
  }

  // cloudtrail - computed: false, optional: true, required: false
  private _cloudtrail = new CloudAwsEuSovereignIntegrationsCloudtrailOutputReference(this, "cloudtrail");
  public get cloudtrail() {
    return this._cloudtrail;
  }
  public putCloudtrail(value: CloudAwsEuSovereignIntegrationsCloudtrail) {
    this._cloudtrail.internalValue = value;
  }
  public resetCloudtrail() {
    this._cloudtrail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailInput() {
    return this._cloudtrail.internalValue;
  }

  // x_ray - computed: false, optional: true, required: false
  private _xRay = new CloudAwsEuSovereignIntegrationsXRayOutputReference(this, "x_ray");
  public get xRay() {
    return this._xRay;
  }
  public putXRay(value: CloudAwsEuSovereignIntegrationsXRay) {
    this._xRay.internalValue = value;
  }
  public resetXRay() {
    this._xRay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xRayInput() {
    return this._xRay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      id: cdktn.stringToTerraform(this._id),
      linked_account_id: cdktn.numberToTerraform(this._linkedAccountId),
      billing: cloudAwsEuSovereignIntegrationsBillingToTerraform(this._billing.internalValue),
      cloudtrail: cloudAwsEuSovereignIntegrationsCloudtrailToTerraform(this._cloudtrail.internalValue),
      x_ray: cloudAwsEuSovereignIntegrationsXRayToTerraform(this._xRay.internalValue),
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
      billing: {
        value: cloudAwsEuSovereignIntegrationsBillingToHclTerraform(this._billing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsEuSovereignIntegrationsBillingList",
      },
      cloudtrail: {
        value: cloudAwsEuSovereignIntegrationsCloudtrailToHclTerraform(this._cloudtrail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsEuSovereignIntegrationsCloudtrailList",
      },
      x_ray: {
        value: cloudAwsEuSovereignIntegrationsXRayToHclTerraform(this._xRay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsEuSovereignIntegrationsXRayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
