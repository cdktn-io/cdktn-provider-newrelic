/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataNewrelicNotebookConfig extends cdktn.TerraformMetaArguments {
  /**
  * When true, the full notebook body is fetched from the Blob Storage API and stored in the `content` attribute. When false (default), only NerdGraph metadata (title, organization_id, blob_id) is retrieved, which is faster and avoids an extra API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook#fetch_content DataNewrelicNotebook#fetch_content}
  */
  readonly fetchContent?: boolean | cdktn.IResolvable;
  /**
  * The unique entity identifier (GUID) of the notebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook#guid DataNewrelicNotebook#guid}
  */
  readonly guid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook#id DataNewrelicNotebook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook newrelic_notebook}
*/
export class DataNewrelicNotebook extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_notebook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataNewrelicNotebook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicNotebook to import
  * @param importFromId The id of the existing DataNewrelicNotebook that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicNotebook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_notebook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/data-sources/notebook newrelic_notebook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicNotebookConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicNotebookConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_notebook',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.99.3',
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
    this._fetchContent = config.fetchContent;
    this._guid = config.guid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_id - computed: true, optional: false, required: false
  public get blobId() {
    return this.getStringAttribute('blob_id');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // fetch_content - computed: false, optional: true, required: false
  private _fetchContent?: boolean | cdktn.IResolvable; 
  public get fetchContent() {
    return this.getBooleanAttribute('fetch_content');
  }
  public set fetchContent(value: boolean | cdktn.IResolvable) {
    this._fetchContent = value;
  }
  public resetFetchContent() {
    this._fetchContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchContentInput() {
    return this._fetchContent;
  }

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fetch_content: cdktn.booleanToTerraform(this._fetchContent),
      guid: cdktn.stringToTerraform(this._guid),
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fetch_content: {
        value: cdktn.booleanToHclTerraform(this._fetchContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guid: {
        value: cdktn.stringToHclTerraform(this._guid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
