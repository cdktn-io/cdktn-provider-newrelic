# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-newrelic.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewrelicProvider <a name="NewrelicProvider" id="@cdktn/provider-newrelic.provider.NewrelicProvider"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs newrelic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new NewrelicProvider(Construct Scope, string Id, NewrelicProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig">NewrelicProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig">NewrelicProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey">ResetAdminApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetCacertFile">ResetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl">ResetInfrastructureApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify">ResetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey">ResetInsightsInsertKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl">ResetInsightsInsertUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl">ResetInsightsQueryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl">ResetNerdgraphApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl">ResetSyntheticsApiUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.provider.NewrelicProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.provider.NewrelicProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.provider.NewrelicProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.provider.NewrelicProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.provider.NewrelicProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.provider.NewrelicProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.provider.NewrelicProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAdminApiKey` <a name="ResetAdminApiKey" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey"></a>

```csharp
private void ResetAdminApiKey()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetApiUrl"></a>

```csharp
private void ResetApiUrl()
```

##### `ResetCacertFile` <a name="ResetCacertFile" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetCacertFile"></a>

```csharp
private void ResetCacertFile()
```

##### `ResetInfrastructureApiUrl` <a name="ResetInfrastructureApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl"></a>

```csharp
private void ResetInfrastructureApiUrl()
```

##### `ResetInsecureSkipVerify` <a name="ResetInsecureSkipVerify" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify"></a>

```csharp
private void ResetInsecureSkipVerify()
```

##### `ResetInsightsInsertKey` <a name="ResetInsightsInsertKey" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey"></a>

```csharp
private void ResetInsightsInsertKey()
```

##### `ResetInsightsInsertUrl` <a name="ResetInsightsInsertUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl"></a>

```csharp
private void ResetInsightsInsertUrl()
```

##### `ResetInsightsQueryUrl` <a name="ResetInsightsQueryUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl"></a>

```csharp
private void ResetInsightsQueryUrl()
```

##### `ResetNerdgraphApiUrl` <a name="ResetNerdgraphApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl"></a>

```csharp
private void ResetNerdgraphApiUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSyntheticsApiUrl` <a name="ResetSyntheticsApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl"></a>

```csharp
private void ResetSyntheticsApiUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NewrelicProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.provider.NewrelicProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

NewrelicProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.provider.NewrelicProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.provider.NewrelicProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

NewrelicProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.provider.NewrelicProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-newrelic.provider.NewrelicProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

NewrelicProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.provider.NewrelicProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.provider.NewrelicProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

NewrelicProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NewrelicProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NewrelicProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NewrelicProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NewrelicProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput">AdminApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput">CacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput">InfrastructureApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput">InsecureSkipVerifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput">InsightsInsertKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput">InsightsInsertUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput">InsightsQueryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput">NerdgraphApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput">SyntheticsApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.adminApiKey">AdminApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.cacertFile">CacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl">InfrastructureApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey">InsightsInsertKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl">InsightsInsertUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl">InsightsQueryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl">NerdgraphApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl">SyntheticsApiUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `AdminApiKeyInput`<sup>Optional</sup> <a name="AdminApiKeyInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput"></a>

```csharp
public string AdminApiKeyInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `CacertFileInput`<sup>Optional</sup> <a name="CacertFileInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput"></a>

```csharp
public string CacertFileInput { get; }
```

- *Type:* string

---

##### `InfrastructureApiUrlInput`<sup>Optional</sup> <a name="InfrastructureApiUrlInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput"></a>

```csharp
public string InfrastructureApiUrlInput { get; }
```

- *Type:* string

---

##### `InsecureSkipVerifyInput`<sup>Optional</sup> <a name="InsecureSkipVerifyInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput"></a>

```csharp
public bool|IResolvable InsecureSkipVerifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InsightsInsertKeyInput`<sup>Optional</sup> <a name="InsightsInsertKeyInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput"></a>

```csharp
public string InsightsInsertKeyInput { get; }
```

- *Type:* string

---

##### `InsightsInsertUrlInput`<sup>Optional</sup> <a name="InsightsInsertUrlInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput"></a>

```csharp
public string InsightsInsertUrlInput { get; }
```

- *Type:* string

---

##### `InsightsQueryUrlInput`<sup>Optional</sup> <a name="InsightsQueryUrlInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput"></a>

```csharp
public string InsightsQueryUrlInput { get; }
```

- *Type:* string

---

##### `NerdgraphApiUrlInput`<sup>Optional</sup> <a name="NerdgraphApiUrlInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput"></a>

```csharp
public string NerdgraphApiUrlInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SyntheticsApiUrlInput`<sup>Optional</sup> <a name="SyntheticsApiUrlInput" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput"></a>

```csharp
public string SyntheticsApiUrlInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `AdminApiKey`<sup>Optional</sup> <a name="AdminApiKey" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.adminApiKey"></a>

```csharp
public string AdminApiKey { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.cacertFile"></a>

```csharp
public string CacertFile { get; }
```

- *Type:* string

---

##### `InfrastructureApiUrl`<sup>Optional</sup> <a name="InfrastructureApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl"></a>

```csharp
public string InfrastructureApiUrl { get; }
```

- *Type:* string

---

##### `InsecureSkipVerify`<sup>Optional</sup> <a name="InsecureSkipVerify" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify"></a>

```csharp
public bool|IResolvable InsecureSkipVerify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InsightsInsertKey`<sup>Optional</sup> <a name="InsightsInsertKey" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey"></a>

```csharp
public string InsightsInsertKey { get; }
```

- *Type:* string

---

##### `InsightsInsertUrl`<sup>Optional</sup> <a name="InsightsInsertUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl"></a>

```csharp
public string InsightsInsertUrl { get; }
```

- *Type:* string

---

##### `InsightsQueryUrl`<sup>Optional</sup> <a name="InsightsQueryUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl"></a>

```csharp
public string InsightsQueryUrl { get; }
```

- *Type:* string

---

##### `NerdgraphApiUrl`<sup>Optional</sup> <a name="NerdgraphApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl"></a>

```csharp
public string NerdgraphApiUrl { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SyntheticsApiUrl`<sup>Optional</sup> <a name="SyntheticsApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl"></a>

```csharp
public string SyntheticsApiUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.provider.NewrelicProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NewrelicProviderConfig <a name="NewrelicProviderConfig" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new NewrelicProviderConfig {
    double AccountId,
    string ApiKey,
    string AdminApiKey = null,
    string Alias = null,
    string ApiUrl = null,
    string CacertFile = null,
    string InfrastructureApiUrl = null,
    bool|IResolvable InsecureSkipVerify = null,
    string InsightsInsertKey = null,
    string InsightsInsertUrl = null,
    string InsightsQueryUrl = null,
    string NerdgraphApiUrl = null,
    string Region = null,
    string SyntheticsApiUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.accountId">AccountId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey">AdminApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl">ApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile">CacertFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl">InfrastructureApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey">InsightsInsertKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl">InsightsInsertUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl">InsightsQueryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl">NerdgraphApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.region">Region</a></code> | <code>string</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl">SyntheticsApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#account_id NewrelicProvider#account_id}.

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#api_key NewrelicProvider#api_key}.

---

##### `AdminApiKey`<sup>Optional</sup> <a name="AdminApiKey" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey"></a>

```csharp
public string AdminApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#alias NewrelicProvider#alias}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#api_url NewrelicProvider#api_url}.

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile"></a>

```csharp
public string CacertFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `InfrastructureApiUrl`<sup>Optional</sup> <a name="InfrastructureApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl"></a>

```csharp
public string InfrastructureApiUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `InsecureSkipVerify`<sup>Optional</sup> <a name="InsecureSkipVerify" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify"></a>

```csharp
public bool|IResolvable InsecureSkipVerify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `InsightsInsertKey`<sup>Optional</sup> <a name="InsightsInsertKey" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey"></a>

```csharp
public string InsightsInsertKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `InsightsInsertUrl`<sup>Optional</sup> <a name="InsightsInsertUrl" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl"></a>

```csharp
public string InsightsInsertUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `InsightsQueryUrl`<sup>Optional</sup> <a name="InsightsQueryUrl" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl"></a>

```csharp
public string InsightsQueryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `NerdgraphApiUrl`<sup>Optional</sup> <a name="NerdgraphApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl"></a>

```csharp
public string NerdgraphApiUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#region NewrelicProvider#region}

---

##### `SyntheticsApiUrl`<sup>Optional</sup> <a name="SyntheticsApiUrl" id="@cdktn/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl"></a>

```csharp
public string SyntheticsApiUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---



