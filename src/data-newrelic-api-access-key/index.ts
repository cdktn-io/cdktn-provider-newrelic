/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataNewrelicApiAccessKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID the key belongs to. Defaults to the account ID configured on the provider when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}
  */
  readonly ingestType?: string;
  /**
  * The ID of the key. When specified, the key is fetched directly by its ID instead of searching by other attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}
  */
  readonly keyId?: string;
  /**
  * The type of the key, one of INGEST or USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}
  */
  readonly keyType: string;
  /**
  * The name of the key. Used to narrow down the search when `key_id` is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}
  */
  readonly name?: string;
  /**
  * The ID of the user that owns the key. Only applies when `key_type` is USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key newrelic_api_access_key}
*/
export class DataNewrelicApiAccessKey extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_api_access_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicApiAccessKey to import
  * @param importFromId The id of the existing DataNewrelicApiAccessKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicApiAccessKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_api_access_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key newrelic_api_access_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicApiAccessKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicApiAccessKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_api_access_key',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.95.2',
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
    this._ingestType = config.ingestType;
    this._keyId = config.keyId;
    this._keyType = config.keyType;
    this._name = config.name;
    this._userId = config.userId;
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

  // ingest_type - computed: true, optional: true, required: false
  private _ingestType?: string; 
  public get ingestType() {
    return this.getStringAttribute('ingest_type');
  }
  public set ingestType(value: string) {
    this._ingestType = value;
  }
  public resetIngestType() {
    this._ingestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTypeInput() {
    return this._ingestType;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: true, optional: true, required: false
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

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      id: cdktn.stringToTerraform(this._id),
      ingest_type: cdktn.stringToTerraform(this._ingestType),
      key_id: cdktn.stringToTerraform(this._keyId),
      key_type: cdktn.stringToTerraform(this._keyType),
      name: cdktn.stringToTerraform(this._name),
      user_id: cdktn.numberToTerraform(this._userId),
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
      ingest_type: {
        value: cdktn.stringToHclTerraform(this._ingestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktn.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktn.stringToHclTerraform(this._keyType),
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
      user_id: {
        value: cdktn.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
