/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataNewrelicNotificationDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The account ID under which to put the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#account_id DataNewrelicNotificationDestination#account_id}
  */
  readonly accountId?: number;
  /**
  * The exact name of the destination. Uses an exact match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#exact_name DataNewrelicNotificationDestination#exact_name}
  */
  readonly exactName?: string;
  /**
  * The ID of the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#id DataNewrelicNotificationDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the destination. Uses a contains match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#name DataNewrelicNotificationDestination#name}
  */
  readonly name?: string;
  /**
  * secure_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#secure_url DataNewrelicNotificationDestination#secure_url}
  */
  readonly secureUrl?: DataNewrelicNotificationDestinationSecureUrl[] | cdktn.IResolvable;
}
export interface DataNewrelicNotificationDestinationProperty {
}

export function dataNewrelicNotificationDestinationPropertyToTerraform(struct?: DataNewrelicNotificationDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNewrelicNotificationDestinationPropertyToHclTerraform(struct?: DataNewrelicNotificationDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNewrelicNotificationDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataNewrelicNotificationDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNewrelicNotificationDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_value - computed: true, optional: false, required: false
  public get displayValue() {
    return this.getStringAttribute('display_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNewrelicNotificationDestinationPropertyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNewrelicNotificationDestinationPropertyOutputReference {
    return new DataNewrelicNotificationDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNewrelicNotificationDestinationSecureUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#prefix DataNewrelicNotificationDestination#prefix}
  */
  readonly prefix: string;
}

export function dataNewrelicNotificationDestinationSecureUrlToTerraform(struct?: DataNewrelicNotificationDestinationSecureUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function dataNewrelicNotificationDestinationSecureUrlToHclTerraform(struct?: DataNewrelicNotificationDestinationSecureUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNewrelicNotificationDestinationSecureUrlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataNewrelicNotificationDestinationSecureUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNewrelicNotificationDestinationSecureUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataNewrelicNotificationDestinationSecureUrlList extends cdktn.ComplexList {
  public internalValue? : DataNewrelicNotificationDestinationSecureUrl[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNewrelicNotificationDestinationSecureUrlOutputReference {
    return new DataNewrelicNotificationDestinationSecureUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination newrelic_notification_destination}
*/
export class DataNewrelicNotificationDestination extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_notification_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataNewrelicNotificationDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicNotificationDestination to import
  * @param importFromId The id of the existing DataNewrelicNotificationDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicNotificationDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_notification_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/notification_destination newrelic_notification_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicNotificationDestinationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicNotificationDestinationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'newrelic_notification_destination',
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
    this._exactName = config.exactName;
    this._id = config.id;
    this._name = config.name;
    this._secureUrl.internalValue = config.secureUrl;
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

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // exact_name - computed: false, optional: true, required: false
  private _exactName?: string; 
  public get exactName() {
    return this.getStringAttribute('exact_name');
  }
  public set exactName(value: string) {
    this._exactName = value;
  }
  public resetExactName() {
    this._exactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNameInput() {
    return this._exactName;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // property - computed: true, optional: false, required: false
  private _property = new DataNewrelicNotificationDestinationPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // secure_url - computed: false, optional: true, required: false
  private _secureUrl = new DataNewrelicNotificationDestinationSecureUrlList(this, "secure_url", true);
  public get secureUrl() {
    return this._secureUrl;
  }
  public putSecureUrl(value: DataNewrelicNotificationDestinationSecureUrl[] | cdktn.IResolvable) {
    this._secureUrl.internalValue = value;
  }
  public resetSecureUrl() {
    this._secureUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureUrlInput() {
    return this._secureUrl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      exact_name: cdktn.stringToTerraform(this._exactName),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      secure_url: cdktn.listMapper(dataNewrelicNotificationDestinationSecureUrlToTerraform, true)(this._secureUrl.internalValue),
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
      exact_name: {
        value: cdktn.stringToHclTerraform(this._exactName),
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
      secure_url: {
        value: cdktn.listMapperHcl(dataNewrelicNotificationDestinationSecureUrlToHclTerraform, true)(this._secureUrl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNewrelicNotificationDestinationSecureUrlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
