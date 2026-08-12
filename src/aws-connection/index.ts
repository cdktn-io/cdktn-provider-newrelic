/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#account_id AwsConnection#account_id}
  */
  readonly accountId?: number;
  /**
  * The description of the AWS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#description AwsConnection#description}
  */
  readonly description?: string;
  /**
  * Flag to indicate if the connection is enabled. True by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#enabled AwsConnection#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Optional field representing an identifier managed by the consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#external_id AwsConnection#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#id AwsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the AWS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#name AwsConnection#name}
  */
  readonly name: string;
  /**
  * Default region for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#region AwsConnection#region}
  */
  readonly region?: string;
  /**
  * The scope ID (account ID or organization ID) for the AWS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#scope_id AwsConnection#scope_id}
  */
  readonly scopeId?: string;
  /**
  * The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#scope_type AwsConnection#scope_type}
  */
  readonly scopeType?: string;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#credential AwsConnection#credential}
  */
  readonly credential: AwsConnectionCredential;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#settings AwsConnection#settings}
  */
  readonly settings?: AwsConnectionSettings[] | cdktn.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#tag AwsConnection#tag}
  */
  readonly tag?: AwsConnectionTag[] | cdktn.IResolvable;
}
export interface AwsConnectionCredentialAssumeRole {
  /**
  * External ID supplied by New Relic during AssumeRole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#external_id AwsConnection#external_id}
  */
  readonly externalId?: string;
  /**
  * ARN of the IAM role New Relic should assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#role_arn AwsConnection#role_arn}
  */
  readonly roleArn: string;
}

export function awsConnectionCredentialAssumeRoleToTerraform(struct?: AwsConnectionCredentialAssumeRoleOutputReference | AwsConnectionCredentialAssumeRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_id: cdktn.stringToTerraform(struct!.externalId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsConnectionCredentialAssumeRoleToHclTerraform(struct?: AwsConnectionCredentialAssumeRoleOutputReference | AwsConnectionCredentialAssumeRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsConnectionCredentialAssumeRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsConnectionCredentialAssumeRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsConnectionCredentialAssumeRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface AwsConnectionCredential {
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#assume_role AwsConnection#assume_role}
  */
  readonly assumeRole: AwsConnectionCredentialAssumeRole;
}

export function awsConnectionCredentialToTerraform(struct?: AwsConnectionCredentialOutputReference | AwsConnectionCredential): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assume_role: awsConnectionCredentialAssumeRoleToTerraform(struct!.assumeRole),
  }
}


export function awsConnectionCredentialToHclTerraform(struct?: AwsConnectionCredentialOutputReference | AwsConnectionCredential): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assume_role: {
      value: awsConnectionCredentialAssumeRoleToHclTerraform(struct!.assumeRole),
      isBlock: true,
      type: "list",
      storageClassType: "AwsConnectionCredentialAssumeRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsConnectionCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsConnectionCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsConnectionCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assumeRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assumeRole.internalValue = value.assumeRole;
    }
  }

  // assume_role - computed: false, optional: false, required: true
  private _assumeRole = new AwsConnectionCredentialAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: AwsConnectionCredentialAssumeRole) {
    this._assumeRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole.internalValue;
  }
}
export interface AwsConnectionSettings {
  /**
  * The key or name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#key AwsConnection#key}
  */
  readonly key: string;
  /**
  * The value of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#value AwsConnection#value}
  */
  readonly value: string;
}

export function awsConnectionSettingsToTerraform(struct?: AwsConnectionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionSettingsToHclTerraform(struct?: AwsConnectionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsConnectionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AwsConnectionSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsConnectionSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AwsConnectionSettingsList extends cdktn.ComplexList {
  public internalValue? : AwsConnectionSettings[] | cdktn.IResolvable

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
  public get(index: number): AwsConnectionSettingsOutputReference {
    return new AwsConnectionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsConnectionTag {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#key AwsConnection#key}
  */
  readonly key: string;
  /**
  * The tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#values AwsConnection#values}
  */
  readonly values: string[];
}

export function awsConnectionTagToTerraform(struct?: AwsConnectionTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsConnectionTagToHclTerraform(struct?: AwsConnectionTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsConnectionTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AwsConnectionTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsConnectionTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AwsConnectionTagList extends cdktn.ComplexList {
  public internalValue? : AwsConnectionTag[] | cdktn.IResolvable

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
  public get(index: number): AwsConnectionTagOutputReference {
    return new AwsConnectionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection newrelic_aws_connection}
*/
export class AwsConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_aws_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnection to import
  * @param importFromId The id of the existing AwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_aws_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/aws_connection newrelic_aws_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_aws_connection',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._externalId = config.externalId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._scopeId = config.scopeId;
    this._scopeType = config.scopeType;
    this._credential.internalValue = config.credential;
    this._settings.internalValue = config.settings;
    this._tag.internalValue = config.tag;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scope_id - computed: true, optional: true, required: false
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  public resetScopeId() {
    this._scopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // scope_type - computed: false, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new AwsConnectionCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: AwsConnectionCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new AwsConnectionSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: AwsConnectionSettings[] | cdktn.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new AwsConnectionTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: AwsConnectionTag[] | cdktn.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      external_id: cdktn.stringToTerraform(this._externalId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      scope_id: cdktn.stringToTerraform(this._scopeId),
      scope_type: cdktn.stringToTerraform(this._scopeType),
      credential: awsConnectionCredentialToTerraform(this._credential.internalValue),
      settings: cdktn.listMapper(awsConnectionSettingsToTerraform, true)(this._settings.internalValue),
      tag: cdktn.listMapper(awsConnectionTagToTerraform, true)(this._tag.internalValue),
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
      external_id: {
        value: cdktn.stringToHclTerraform(this._externalId),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_id: {
        value: cdktn.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_type: {
        value: cdktn.stringToHclTerraform(this._scopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential: {
        value: awsConnectionCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnectionCredentialList",
      },
      settings: {
        value: cdktn.listMapperHcl(awsConnectionSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnectionSettingsList",
      },
      tag: {
        value: cdktn.listMapperHcl(awsConnectionTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsConnectionTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
