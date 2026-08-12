# `cloudGcpDmIntegrations` Submodule <a name="`cloudGcpDmIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpDmIntegrations <a name="CloudGcpDmIntegrations" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations newrelic_cloud_gcp_dm_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrations(scope Construct, id *string, config CloudGcpDmIntegrationsConfig) CloudGcpDmIntegrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig">CloudGcpDmIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig">CloudGcpDmIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform">PutAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb">PutAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway">PutApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine">PutAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery">PutBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable">PutBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer">PutComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow">PutDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc">PutDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore">PutDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting">PutFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth">PutFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase">PutFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting">PutFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage">PutFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi">PutFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore">PutFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect">PutInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio">PutIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing">PutLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka">PutManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache">PutMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore">PutMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub">PutPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis">PutRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter">PutRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun">PutRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner">PutSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines">PutVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform">ResetAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb">ResetAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway">ResetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine">ResetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery">ResetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable">ResetBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer">ResetComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow">ResetDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc">ResetDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore">ResetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting">ResetFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth">ResetFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase">ResetFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting">ResetFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage">ResetFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi">ResetFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore">ResetFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions">ResetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio">ResetIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing">ResetLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka">ResetManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache">ResetMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore">ResetMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub">ResetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis">ResetRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner">ResetSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines">ResetVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAiPlatform` <a name="PutAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform"></a>

```go
func PutAiPlatform(value CloudGcpDmIntegrationsAiPlatform)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `PutAlloyDb` <a name="PutAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb"></a>

```go
func PutAlloyDb(value CloudGcpDmIntegrationsAlloyDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `PutApiGateway` <a name="PutApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway"></a>

```go
func PutApiGateway(value CloudGcpDmIntegrationsApiGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `PutAppEngine` <a name="PutAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine"></a>

```go
func PutAppEngine(value CloudGcpDmIntegrationsAppEngine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `PutBigQuery` <a name="PutBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery"></a>

```go
func PutBigQuery(value CloudGcpDmIntegrationsBigQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `PutBigTable` <a name="PutBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable"></a>

```go
func PutBigTable(value CloudGcpDmIntegrationsBigTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `PutComposer` <a name="PutComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer"></a>

```go
func PutComposer(value CloudGcpDmIntegrationsComposer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `PutDataFlow` <a name="PutDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow"></a>

```go
func PutDataFlow(value CloudGcpDmIntegrationsDataFlow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `PutDataProc` <a name="PutDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc"></a>

```go
func PutDataProc(value CloudGcpDmIntegrationsDataProc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `PutDataStore` <a name="PutDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore"></a>

```go
func PutDataStore(value CloudGcpDmIntegrationsDataStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `PutFirebaseAppHosting` <a name="PutFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting"></a>

```go
func PutFirebaseAppHosting(value CloudGcpDmIntegrationsFirebaseAppHosting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `PutFirebaseAuth` <a name="PutFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth"></a>

```go
func PutFirebaseAuth(value CloudGcpDmIntegrationsFirebaseAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `PutFirebaseDatabase` <a name="PutFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase"></a>

```go
func PutFirebaseDatabase(value CloudGcpDmIntegrationsFirebaseDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `PutFirebaseHosting` <a name="PutFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting"></a>

```go
func PutFirebaseHosting(value CloudGcpDmIntegrationsFirebaseHosting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `PutFirebaseStorage` <a name="PutFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage"></a>

```go
func PutFirebaseStorage(value CloudGcpDmIntegrationsFirebaseStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `PutFirebaseVertexAi` <a name="PutFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi"></a>

```go
func PutFirebaseVertexAi(value CloudGcpDmIntegrationsFirebaseVertexAi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `PutFirestore` <a name="PutFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore"></a>

```go
func PutFirestore(value CloudGcpDmIntegrationsFirestore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `PutFunctions` <a name="PutFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions"></a>

```go
func PutFunctions(value CloudGcpDmIntegrationsFunctions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `PutInterconnect` <a name="PutInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect"></a>

```go
func PutInterconnect(value CloudGcpDmIntegrationsInterconnect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `PutIstio` <a name="PutIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio"></a>

```go
func PutIstio(value CloudGcpDmIntegrationsIstio)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes"></a>

```go
func PutKubernetes(value CloudGcpDmIntegrationsKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `PutLoadBalancing` <a name="PutLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing"></a>

```go
func PutLoadBalancing(value CloudGcpDmIntegrationsLoadBalancing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `PutManagedKafka` <a name="PutManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka"></a>

```go
func PutManagedKafka(value CloudGcpDmIntegrationsManagedKafka)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `PutMemCache` <a name="PutMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache"></a>

```go
func PutMemCache(value CloudGcpDmIntegrationsMemCache)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `PutMemoryStore` <a name="PutMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore"></a>

```go
func PutMemoryStore(value CloudGcpDmIntegrationsMemoryStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `PutPubSub` <a name="PutPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub"></a>

```go
func PutPubSub(value CloudGcpDmIntegrationsPubSub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `PutRedis` <a name="PutRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis"></a>

```go
func PutRedis(value CloudGcpDmIntegrationsRedis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `PutRouter` <a name="PutRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter"></a>

```go
func PutRouter(value CloudGcpDmIntegrationsRouter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `PutRun` <a name="PutRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun"></a>

```go
func PutRun(value CloudGcpDmIntegrationsRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `PutSpanner` <a name="PutSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner"></a>

```go
func PutSpanner(value CloudGcpDmIntegrationsSpanner)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `PutSql` <a name="PutSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql"></a>

```go
func PutSql(value CloudGcpDmIntegrationsSql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage"></a>

```go
func PutStorage(value CloudGcpDmIntegrationsStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `PutVirtualMachines` <a name="PutVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines"></a>

```go
func PutVirtualMachines(value CloudGcpDmIntegrationsVirtualMachines)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess"></a>

```go
func PutVpcAccess(value CloudGcpDmIntegrationsVpcAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAiPlatform` <a name="ResetAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform"></a>

```go
func ResetAiPlatform()
```

##### `ResetAlloyDb` <a name="ResetAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb"></a>

```go
func ResetAlloyDb()
```

##### `ResetApiGateway` <a name="ResetApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway"></a>

```go
func ResetApiGateway()
```

##### `ResetAppEngine` <a name="ResetAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine"></a>

```go
func ResetAppEngine()
```

##### `ResetBigQuery` <a name="ResetBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery"></a>

```go
func ResetBigQuery()
```

##### `ResetBigTable` <a name="ResetBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable"></a>

```go
func ResetBigTable()
```

##### `ResetComposer` <a name="ResetComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer"></a>

```go
func ResetComposer()
```

##### `ResetDataFlow` <a name="ResetDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow"></a>

```go
func ResetDataFlow()
```

##### `ResetDataProc` <a name="ResetDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc"></a>

```go
func ResetDataProc()
```

##### `ResetDataStore` <a name="ResetDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore"></a>

```go
func ResetDataStore()
```

##### `ResetFirebaseAppHosting` <a name="ResetFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting"></a>

```go
func ResetFirebaseAppHosting()
```

##### `ResetFirebaseAuth` <a name="ResetFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth"></a>

```go
func ResetFirebaseAuth()
```

##### `ResetFirebaseDatabase` <a name="ResetFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase"></a>

```go
func ResetFirebaseDatabase()
```

##### `ResetFirebaseHosting` <a name="ResetFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting"></a>

```go
func ResetFirebaseHosting()
```

##### `ResetFirebaseStorage` <a name="ResetFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage"></a>

```go
func ResetFirebaseStorage()
```

##### `ResetFirebaseVertexAi` <a name="ResetFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi"></a>

```go
func ResetFirebaseVertexAi()
```

##### `ResetFirestore` <a name="ResetFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore"></a>

```go
func ResetFirestore()
```

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions"></a>

```go
func ResetFunctions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect"></a>

```go
func ResetInterconnect()
```

##### `ResetIstio` <a name="ResetIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio"></a>

```go
func ResetIstio()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetLoadBalancing` <a name="ResetLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing"></a>

```go
func ResetLoadBalancing()
```

##### `ResetManagedKafka` <a name="ResetManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka"></a>

```go
func ResetManagedKafka()
```

##### `ResetMemCache` <a name="ResetMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache"></a>

```go
func ResetMemCache()
```

##### `ResetMemoryStore` <a name="ResetMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore"></a>

```go
func ResetMemoryStore()
```

##### `ResetPubSub` <a name="ResetPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub"></a>

```go
func ResetPubSub()
```

##### `ResetRedis` <a name="ResetRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis"></a>

```go
func ResetRedis()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetRun` <a name="ResetRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun"></a>

```go
func ResetRun()
```

##### `ResetSpanner` <a name="ResetSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner"></a>

```go
func ResetSpanner()
```

##### `ResetSql` <a name="ResetSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql"></a>

```go
func ResetSql()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetVirtualMachines` <a name="ResetVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines"></a>

```go
func ResetVirtualMachines()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess"></a>

```go
func ResetVpcAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.CloudGcpDmIntegrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.CloudGcpDmIntegrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.CloudGcpDmIntegrations_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.CloudGcpDmIntegrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudGcpDmIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudGcpDmIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudGcpDmIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform">AiPlatform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb">AlloyDb</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable">BigTable</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer">Composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc">DataProc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore">DataStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting">FirebaseAppHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth">FirebaseAuth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase">FirebaseDatabase</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting">FirebaseHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage">FirebaseStorage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi">FirebaseVertexAi</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore">Firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions">Functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect">Interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio">Istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka">ManagedKafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache">MemCache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore">MemoryStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub">PubSub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis">Redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router">Router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run">Run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner">Spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines">VirtualMachines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput">AiPlatformInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput">AlloyDbInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput">ApiGatewayInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput">AppEngineInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput">BigQueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput">BigTableInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput">ComposerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput">DataFlowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput">DataProcInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput">DataStoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput">FirebaseAppHostingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput">FirebaseAuthInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput">FirebaseDatabaseInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput">FirebaseHostingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput">FirebaseStorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput">FirebaseVertexAiInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput">FirestoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput">FunctionsInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput">InterconnectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput">IstioInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput">LoadBalancingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput">ManagedKafkaInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput">MemCacheInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput">MemoryStoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput">PubSubInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput">RedisInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput">RunInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput">SpannerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput">SqlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput">VirtualMachinesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId">LinkedAccountId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiPlatform`<sup>Required</sup> <a name="AiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform"></a>

```go
func AiPlatform() CloudGcpDmIntegrationsAiPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a>

---

##### `AlloyDb`<sup>Required</sup> <a name="AlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb"></a>

```go
func AlloyDb() CloudGcpDmIntegrationsAlloyDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a>

---

##### `ApiGateway`<sup>Required</sup> <a name="ApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway"></a>

```go
func ApiGateway() CloudGcpDmIntegrationsApiGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a>

---

##### `AppEngine`<sup>Required</sup> <a name="AppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine"></a>

```go
func AppEngine() CloudGcpDmIntegrationsAppEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a>

---

##### `BigQuery`<sup>Required</sup> <a name="BigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery"></a>

```go
func BigQuery() CloudGcpDmIntegrationsBigQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a>

---

##### `BigTable`<sup>Required</sup> <a name="BigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable"></a>

```go
func BigTable() CloudGcpDmIntegrationsBigTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a>

---

##### `Composer`<sup>Required</sup> <a name="Composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer"></a>

```go
func Composer() CloudGcpDmIntegrationsComposerOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a>

---

##### `DataFlow`<sup>Required</sup> <a name="DataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow"></a>

```go
func DataFlow() CloudGcpDmIntegrationsDataFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a>

---

##### `DataProc`<sup>Required</sup> <a name="DataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc"></a>

```go
func DataProc() CloudGcpDmIntegrationsDataProcOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore"></a>

```go
func DataStore() CloudGcpDmIntegrationsDataStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a>

---

##### `FirebaseAppHosting`<sup>Required</sup> <a name="FirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting"></a>

```go
func FirebaseAppHosting() CloudGcpDmIntegrationsFirebaseAppHostingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a>

---

##### `FirebaseAuth`<sup>Required</sup> <a name="FirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth"></a>

```go
func FirebaseAuth() CloudGcpDmIntegrationsFirebaseAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a>

---

##### `FirebaseDatabase`<sup>Required</sup> <a name="FirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase"></a>

```go
func FirebaseDatabase() CloudGcpDmIntegrationsFirebaseDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a>

---

##### `FirebaseHosting`<sup>Required</sup> <a name="FirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting"></a>

```go
func FirebaseHosting() CloudGcpDmIntegrationsFirebaseHostingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a>

---

##### `FirebaseStorage`<sup>Required</sup> <a name="FirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage"></a>

```go
func FirebaseStorage() CloudGcpDmIntegrationsFirebaseStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a>

---

##### `FirebaseVertexAi`<sup>Required</sup> <a name="FirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi"></a>

```go
func FirebaseVertexAi() CloudGcpDmIntegrationsFirebaseVertexAiOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a>

---

##### `Firestore`<sup>Required</sup> <a name="Firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore"></a>

```go
func Firestore() CloudGcpDmIntegrationsFirestoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a>

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions"></a>

```go
func Functions() CloudGcpDmIntegrationsFunctionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a>

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect"></a>

```go
func Interconnect() CloudGcpDmIntegrationsInterconnectOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a>

---

##### `Istio`<sup>Required</sup> <a name="Istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio"></a>

```go
func Istio() CloudGcpDmIntegrationsIstioOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a>

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes"></a>

```go
func Kubernetes() CloudGcpDmIntegrationsKubernetesOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a>

---

##### `LoadBalancing`<sup>Required</sup> <a name="LoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing"></a>

```go
func LoadBalancing() CloudGcpDmIntegrationsLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a>

---

##### `ManagedKafka`<sup>Required</sup> <a name="ManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka"></a>

```go
func ManagedKafka() CloudGcpDmIntegrationsManagedKafkaOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a>

---

##### `MemCache`<sup>Required</sup> <a name="MemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache"></a>

```go
func MemCache() CloudGcpDmIntegrationsMemCacheOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a>

---

##### `MemoryStore`<sup>Required</sup> <a name="MemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore"></a>

```go
func MemoryStore() CloudGcpDmIntegrationsMemoryStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a>

---

##### `PubSub`<sup>Required</sup> <a name="PubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub"></a>

```go
func PubSub() CloudGcpDmIntegrationsPubSubOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a>

---

##### `Redis`<sup>Required</sup> <a name="Redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis"></a>

```go
func Redis() CloudGcpDmIntegrationsRedisOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a>

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router"></a>

```go
func Router() CloudGcpDmIntegrationsRouterOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a>

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run"></a>

```go
func Run() CloudGcpDmIntegrationsRunOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a>

---

##### `Spanner`<sup>Required</sup> <a name="Spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner"></a>

```go
func Spanner() CloudGcpDmIntegrationsSpannerOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql"></a>

```go
func Sql() CloudGcpDmIntegrationsSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage"></a>

```go
func Storage() CloudGcpDmIntegrationsStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a>

---

##### `VirtualMachines`<sup>Required</sup> <a name="VirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines"></a>

```go
func VirtualMachines() CloudGcpDmIntegrationsVirtualMachinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess"></a>

```go
func VpcAccess() CloudGcpDmIntegrationsVpcAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `AiPlatformInput`<sup>Optional</sup> <a name="AiPlatformInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput"></a>

```go
func AiPlatformInput() CloudGcpDmIntegrationsAiPlatform
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `AlloyDbInput`<sup>Optional</sup> <a name="AlloyDbInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput"></a>

```go
func AlloyDbInput() CloudGcpDmIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `ApiGatewayInput`<sup>Optional</sup> <a name="ApiGatewayInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput"></a>

```go
func ApiGatewayInput() CloudGcpDmIntegrationsApiGateway
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `AppEngineInput`<sup>Optional</sup> <a name="AppEngineInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput"></a>

```go
func AppEngineInput() CloudGcpDmIntegrationsAppEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `BigQueryInput`<sup>Optional</sup> <a name="BigQueryInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput"></a>

```go
func BigQueryInput() CloudGcpDmIntegrationsBigQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `BigTableInput`<sup>Optional</sup> <a name="BigTableInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput"></a>

```go
func BigTableInput() CloudGcpDmIntegrationsBigTable
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `ComposerInput`<sup>Optional</sup> <a name="ComposerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput"></a>

```go
func ComposerInput() CloudGcpDmIntegrationsComposer
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `DataFlowInput`<sup>Optional</sup> <a name="DataFlowInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput"></a>

```go
func DataFlowInput() CloudGcpDmIntegrationsDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `DataProcInput`<sup>Optional</sup> <a name="DataProcInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput"></a>

```go
func DataProcInput() CloudGcpDmIntegrationsDataProc
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput"></a>

```go
func DataStoreInput() CloudGcpDmIntegrationsDataStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `FirebaseAppHostingInput`<sup>Optional</sup> <a name="FirebaseAppHostingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput"></a>

```go
func FirebaseAppHostingInput() CloudGcpDmIntegrationsFirebaseAppHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `FirebaseAuthInput`<sup>Optional</sup> <a name="FirebaseAuthInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput"></a>

```go
func FirebaseAuthInput() CloudGcpDmIntegrationsFirebaseAuth
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `FirebaseDatabaseInput`<sup>Optional</sup> <a name="FirebaseDatabaseInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput"></a>

```go
func FirebaseDatabaseInput() CloudGcpDmIntegrationsFirebaseDatabase
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `FirebaseHostingInput`<sup>Optional</sup> <a name="FirebaseHostingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput"></a>

```go
func FirebaseHostingInput() CloudGcpDmIntegrationsFirebaseHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `FirebaseStorageInput`<sup>Optional</sup> <a name="FirebaseStorageInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput"></a>

```go
func FirebaseStorageInput() CloudGcpDmIntegrationsFirebaseStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `FirebaseVertexAiInput`<sup>Optional</sup> <a name="FirebaseVertexAiInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput"></a>

```go
func FirebaseVertexAiInput() CloudGcpDmIntegrationsFirebaseVertexAi
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `FirestoreInput`<sup>Optional</sup> <a name="FirestoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput"></a>

```go
func FirestoreInput() CloudGcpDmIntegrationsFirestore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput"></a>

```go
func FunctionsInput() CloudGcpDmIntegrationsFunctions
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput"></a>

```go
func InterconnectInput() CloudGcpDmIntegrationsInterconnect
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `IstioInput`<sup>Optional</sup> <a name="IstioInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput"></a>

```go
func IstioInput() CloudGcpDmIntegrationsIstio
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput"></a>

```go
func KubernetesInput() CloudGcpDmIntegrationsKubernetes
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput"></a>

```go
func LinkedAccountIdInput() *f64
```

- *Type:* *f64

---

##### `LoadBalancingInput`<sup>Optional</sup> <a name="LoadBalancingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput"></a>

```go
func LoadBalancingInput() CloudGcpDmIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `ManagedKafkaInput`<sup>Optional</sup> <a name="ManagedKafkaInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput"></a>

```go
func ManagedKafkaInput() CloudGcpDmIntegrationsManagedKafka
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `MemCacheInput`<sup>Optional</sup> <a name="MemCacheInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput"></a>

```go
func MemCacheInput() CloudGcpDmIntegrationsMemCache
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `MemoryStoreInput`<sup>Optional</sup> <a name="MemoryStoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput"></a>

```go
func MemoryStoreInput() CloudGcpDmIntegrationsMemoryStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `PubSubInput`<sup>Optional</sup> <a name="PubSubInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput"></a>

```go
func PubSubInput() CloudGcpDmIntegrationsPubSub
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `RedisInput`<sup>Optional</sup> <a name="RedisInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput"></a>

```go
func RedisInput() CloudGcpDmIntegrationsRedis
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput"></a>

```go
func RouterInput() CloudGcpDmIntegrationsRouter
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput"></a>

```go
func RunInput() CloudGcpDmIntegrationsRun
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `SpannerInput`<sup>Optional</sup> <a name="SpannerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput"></a>

```go
func SpannerInput() CloudGcpDmIntegrationsSpanner
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput"></a>

```go
func SqlInput() CloudGcpDmIntegrationsSql
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput"></a>

```go
func StorageInput() CloudGcpDmIntegrationsStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `VirtualMachinesInput`<sup>Optional</sup> <a name="VirtualMachinesInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput"></a>

```go
func VirtualMachinesInput() CloudGcpDmIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput"></a>

```go
func VpcAccessInput() CloudGcpDmIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId"></a>

```go
func LinkedAccountId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpDmIntegrationsAiPlatform <a name="CloudGcpDmIntegrationsAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsAiPlatform {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAlloyDb <a name="CloudGcpDmIntegrationsAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsAlloyDb {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsApiGateway <a name="CloudGcpDmIntegrationsApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsApiGateway {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAppEngine <a name="CloudGcpDmIntegrationsAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsAppEngine {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigQuery <a name="CloudGcpDmIntegrationsBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsBigQuery {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigTable <a name="CloudGcpDmIntegrationsBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsBigTable {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsComposer <a name="CloudGcpDmIntegrationsComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsComposer {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsConfig <a name="CloudGcpDmIntegrationsConfig" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LinkedAccountId: *f64,
	AccountId: *f64,
	AiPlatform: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform,
	AlloyDb: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb,
	ApiGateway: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway,
	AppEngine: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine,
	BigQuery: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery,
	BigTable: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable,
	Composer: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer,
	DataFlow: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow,
	DataProc: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc,
	DataStore: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore,
	FirebaseAppHosting: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting,
	FirebaseAuth: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth,
	FirebaseDatabase: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase,
	FirebaseHosting: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting,
	FirebaseStorage: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage,
	FirebaseVertexAi: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi,
	Firestore: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore,
	Functions: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions,
	Id: *string,
	Interconnect: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect,
	Istio: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio,
	Kubernetes: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes,
	LoadBalancing: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing,
	ManagedKafka: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka,
	MemCache: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache,
	MemoryStore: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore,
	PubSub: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub,
	Redis: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis,
	Router: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter,
	Run: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun,
	Spanner: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner,
	Sql: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql,
	Storage: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage,
	VirtualMachines: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines,
	VpcAccess: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>*f64</code> | The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true). |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform">AiPlatform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | ai_platform block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb">AlloyDb</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable">BigTable</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer">Composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc">DataProc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore">DataStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting">FirebaseAppHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | firebase_app_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth">FirebaseAuth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | firebase_auth block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase">FirebaseDatabase</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | firebase_database block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting">FirebaseHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | firebase_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage">FirebaseStorage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | firebase_storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi">FirebaseVertexAi</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | firebase_vertex_ai block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore">Firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | firestore block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions">Functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect">Interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio">Istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | istio block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka">ManagedKafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | managed_kafka block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache">MemCache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore">MemoryStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | memory_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub">PubSub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis">Redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router">Router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run">Run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner">Spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines">VirtualMachines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId"></a>

```go
LinkedAccountId *f64
```

- *Type:* *f64

The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#linked_account_id CloudGcpDmIntegrations#linked_account_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#account_id CloudGcpDmIntegrations#account_id}

---

##### `AiPlatform`<sup>Optional</sup> <a name="AiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform"></a>

```go
AiPlatform CloudGcpDmIntegrationsAiPlatform
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

ai_platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#ai_platform CloudGcpDmIntegrations#ai_platform}

---

##### `AlloyDb`<sup>Optional</sup> <a name="AlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb"></a>

```go
AlloyDb CloudGcpDmIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#alloy_db CloudGcpDmIntegrations#alloy_db}

---

##### `ApiGateway`<sup>Optional</sup> <a name="ApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway"></a>

```go
ApiGateway CloudGcpDmIntegrationsApiGateway
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#api_gateway CloudGcpDmIntegrations#api_gateway}

---

##### `AppEngine`<sup>Optional</sup> <a name="AppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine"></a>

```go
AppEngine CloudGcpDmIntegrationsAppEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#app_engine CloudGcpDmIntegrations#app_engine}

---

##### `BigQuery`<sup>Optional</sup> <a name="BigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery"></a>

```go
BigQuery CloudGcpDmIntegrationsBigQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#big_query CloudGcpDmIntegrations#big_query}

---

##### `BigTable`<sup>Optional</sup> <a name="BigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable"></a>

```go
BigTable CloudGcpDmIntegrationsBigTable
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#big_table CloudGcpDmIntegrations#big_table}

---

##### `Composer`<sup>Optional</sup> <a name="Composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer"></a>

```go
Composer CloudGcpDmIntegrationsComposer
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#composer CloudGcpDmIntegrations#composer}

---

##### `DataFlow`<sup>Optional</sup> <a name="DataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow"></a>

```go
DataFlow CloudGcpDmIntegrationsDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_flow CloudGcpDmIntegrations#data_flow}

---

##### `DataProc`<sup>Optional</sup> <a name="DataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc"></a>

```go
DataProc CloudGcpDmIntegrationsDataProc
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_proc CloudGcpDmIntegrations#data_proc}

---

##### `DataStore`<sup>Optional</sup> <a name="DataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore"></a>

```go
DataStore CloudGcpDmIntegrationsDataStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_store CloudGcpDmIntegrations#data_store}

---

##### `FirebaseAppHosting`<sup>Optional</sup> <a name="FirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting"></a>

```go
FirebaseAppHosting CloudGcpDmIntegrationsFirebaseAppHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

firebase_app_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_app_hosting CloudGcpDmIntegrations#firebase_app_hosting}

---

##### `FirebaseAuth`<sup>Optional</sup> <a name="FirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth"></a>

```go
FirebaseAuth CloudGcpDmIntegrationsFirebaseAuth
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

firebase_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_auth CloudGcpDmIntegrations#firebase_auth}

---

##### `FirebaseDatabase`<sup>Optional</sup> <a name="FirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase"></a>

```go
FirebaseDatabase CloudGcpDmIntegrationsFirebaseDatabase
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

firebase_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_database CloudGcpDmIntegrations#firebase_database}

---

##### `FirebaseHosting`<sup>Optional</sup> <a name="FirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting"></a>

```go
FirebaseHosting CloudGcpDmIntegrationsFirebaseHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

firebase_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_hosting CloudGcpDmIntegrations#firebase_hosting}

---

##### `FirebaseStorage`<sup>Optional</sup> <a name="FirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage"></a>

```go
FirebaseStorage CloudGcpDmIntegrationsFirebaseStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

firebase_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_storage CloudGcpDmIntegrations#firebase_storage}

---

##### `FirebaseVertexAi`<sup>Optional</sup> <a name="FirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi"></a>

```go
FirebaseVertexAi CloudGcpDmIntegrationsFirebaseVertexAi
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

firebase_vertex_ai block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_vertex_ai CloudGcpDmIntegrations#firebase_vertex_ai}

---

##### `Firestore`<sup>Optional</sup> <a name="Firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore"></a>

```go
Firestore CloudGcpDmIntegrationsFirestore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

firestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firestore CloudGcpDmIntegrations#firestore}

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions"></a>

```go
Functions CloudGcpDmIntegrationsFunctions
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#functions CloudGcpDmIntegrations#functions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect"></a>

```go
Interconnect CloudGcpDmIntegrationsInterconnect
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#interconnect CloudGcpDmIntegrations#interconnect}

---

##### `Istio`<sup>Optional</sup> <a name="Istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio"></a>

```go
Istio CloudGcpDmIntegrationsIstio
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#istio CloudGcpDmIntegrations#istio}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes"></a>

```go
Kubernetes CloudGcpDmIntegrationsKubernetes
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#kubernetes CloudGcpDmIntegrations#kubernetes}

---

##### `LoadBalancing`<sup>Optional</sup> <a name="LoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing"></a>

```go
LoadBalancing CloudGcpDmIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#load_balancing CloudGcpDmIntegrations#load_balancing}

---

##### `ManagedKafka`<sup>Optional</sup> <a name="ManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka"></a>

```go
ManagedKafka CloudGcpDmIntegrationsManagedKafka
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

managed_kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#managed_kafka CloudGcpDmIntegrations#managed_kafka}

---

##### `MemCache`<sup>Optional</sup> <a name="MemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache"></a>

```go
MemCache CloudGcpDmIntegrationsMemCache
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#mem_cache CloudGcpDmIntegrations#mem_cache}

---

##### `MemoryStore`<sup>Optional</sup> <a name="MemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore"></a>

```go
MemoryStore CloudGcpDmIntegrationsMemoryStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

memory_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#memory_store CloudGcpDmIntegrations#memory_store}

---

##### `PubSub`<sup>Optional</sup> <a name="PubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub"></a>

```go
PubSub CloudGcpDmIntegrationsPubSub
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#pub_sub CloudGcpDmIntegrations#pub_sub}

---

##### `Redis`<sup>Optional</sup> <a name="Redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis"></a>

```go
Redis CloudGcpDmIntegrationsRedis
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#redis CloudGcpDmIntegrations#redis}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router"></a>

```go
Router CloudGcpDmIntegrationsRouter
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#router CloudGcpDmIntegrations#router}

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run"></a>

```go
Run CloudGcpDmIntegrationsRun
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#run CloudGcpDmIntegrations#run}

---

##### `Spanner`<sup>Optional</sup> <a name="Spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner"></a>

```go
Spanner CloudGcpDmIntegrationsSpanner
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#spanner CloudGcpDmIntegrations#spanner}

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql"></a>

```go
Sql CloudGcpDmIntegrationsSql
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#sql CloudGcpDmIntegrations#sql}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage"></a>

```go
Storage CloudGcpDmIntegrationsStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#storage CloudGcpDmIntegrations#storage}

---

##### `VirtualMachines`<sup>Optional</sup> <a name="VirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines"></a>

```go
VirtualMachines CloudGcpDmIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#virtual_machines CloudGcpDmIntegrations#virtual_machines}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess"></a>

```go
VpcAccess CloudGcpDmIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#vpc_access CloudGcpDmIntegrations#vpc_access}

---

### CloudGcpDmIntegrationsDataFlow <a name="CloudGcpDmIntegrationsDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsDataFlow {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataProc <a name="CloudGcpDmIntegrationsDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsDataProc {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataStore <a name="CloudGcpDmIntegrationsDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsDataStore {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAppHosting <a name="CloudGcpDmIntegrationsFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirebaseAppHosting {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAuth <a name="CloudGcpDmIntegrationsFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirebaseAuth {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseDatabase <a name="CloudGcpDmIntegrationsFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirebaseDatabase {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseHosting <a name="CloudGcpDmIntegrationsFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirebaseHosting {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseStorage <a name="CloudGcpDmIntegrationsFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirebaseStorage {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseVertexAi <a name="CloudGcpDmIntegrationsFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirebaseVertexAi {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirestore <a name="CloudGcpDmIntegrationsFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFirestore {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFunctions <a name="CloudGcpDmIntegrationsFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsFunctions {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsInterconnect <a name="CloudGcpDmIntegrationsInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsInterconnect {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsIstio <a name="CloudGcpDmIntegrationsIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsIstio {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsKubernetes <a name="CloudGcpDmIntegrationsKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsKubernetes {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsLoadBalancing <a name="CloudGcpDmIntegrationsLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsLoadBalancing {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsManagedKafka <a name="CloudGcpDmIntegrationsManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsManagedKafka {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemCache <a name="CloudGcpDmIntegrationsMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsMemCache {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemoryStore <a name="CloudGcpDmIntegrationsMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsMemoryStore {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsPubSub <a name="CloudGcpDmIntegrationsPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsPubSub {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRedis <a name="CloudGcpDmIntegrationsRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsRedis {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRouter <a name="CloudGcpDmIntegrationsRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsRouter {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRun <a name="CloudGcpDmIntegrationsRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsRun {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSpanner <a name="CloudGcpDmIntegrationsSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsSpanner {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSql <a name="CloudGcpDmIntegrationsSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsSql {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsStorage <a name="CloudGcpDmIntegrationsStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsStorage {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVirtualMachines <a name="CloudGcpDmIntegrationsVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsVirtualMachines {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVpcAccess <a name="CloudGcpDmIntegrationsVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

&cloudgcpdmintegrations.CloudGcpDmIntegrationsVpcAccess {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpDmIntegrationsAiPlatformOutputReference <a name="CloudGcpDmIntegrationsAiPlatformOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsAiPlatformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsAiPlatformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsAiPlatform
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---


### CloudGcpDmIntegrationsAlloyDbOutputReference <a name="CloudGcpDmIntegrationsAlloyDbOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsAlloyDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsAlloyDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---


### CloudGcpDmIntegrationsApiGatewayOutputReference <a name="CloudGcpDmIntegrationsApiGatewayOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsApiGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsApiGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsApiGateway
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---


### CloudGcpDmIntegrationsAppEngineOutputReference <a name="CloudGcpDmIntegrationsAppEngineOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsAppEngineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsAppEngineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsAppEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---


### CloudGcpDmIntegrationsBigQueryOutputReference <a name="CloudGcpDmIntegrationsBigQueryOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsBigQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsBigQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsBigQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---


### CloudGcpDmIntegrationsBigTableOutputReference <a name="CloudGcpDmIntegrationsBigTableOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsBigTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsBigTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsBigTable
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---


### CloudGcpDmIntegrationsComposerOutputReference <a name="CloudGcpDmIntegrationsComposerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsComposerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsComposerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsComposer
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---


### CloudGcpDmIntegrationsDataFlowOutputReference <a name="CloudGcpDmIntegrationsDataFlowOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsDataFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsDataFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---


### CloudGcpDmIntegrationsDataProcOutputReference <a name="CloudGcpDmIntegrationsDataProcOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsDataProcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsDataProcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsDataProc
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---


### CloudGcpDmIntegrationsDataStoreOutputReference <a name="CloudGcpDmIntegrationsDataStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsDataStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsDataStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsDataStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---


### CloudGcpDmIntegrationsFirebaseAppHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseAppHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirebaseAppHostingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirebaseAppHostingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirebaseAppHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---


### CloudGcpDmIntegrationsFirebaseAuthOutputReference <a name="CloudGcpDmIntegrationsFirebaseAuthOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirebaseAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirebaseAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirebaseAuth
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---


### CloudGcpDmIntegrationsFirebaseDatabaseOutputReference <a name="CloudGcpDmIntegrationsFirebaseDatabaseOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirebaseDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirebaseDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirebaseDatabase
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---


### CloudGcpDmIntegrationsFirebaseHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirebaseHostingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirebaseHostingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirebaseHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---


### CloudGcpDmIntegrationsFirebaseStorageOutputReference <a name="CloudGcpDmIntegrationsFirebaseStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirebaseStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirebaseStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirebaseStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---


### CloudGcpDmIntegrationsFirebaseVertexAiOutputReference <a name="CloudGcpDmIntegrationsFirebaseVertexAiOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirebaseVertexAiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirebaseVertexAiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirebaseVertexAi
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---


### CloudGcpDmIntegrationsFirestoreOutputReference <a name="CloudGcpDmIntegrationsFirestoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFirestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFirestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFirestore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---


### CloudGcpDmIntegrationsFunctionsOutputReference <a name="CloudGcpDmIntegrationsFunctionsOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsFunctions
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---


### CloudGcpDmIntegrationsInterconnectOutputReference <a name="CloudGcpDmIntegrationsInterconnectOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsInterconnectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsInterconnectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsInterconnect
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---


### CloudGcpDmIntegrationsIstioOutputReference <a name="CloudGcpDmIntegrationsIstioOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsIstioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsIstioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsIstio
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---


### CloudGcpDmIntegrationsKubernetesOutputReference <a name="CloudGcpDmIntegrationsKubernetesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsKubernetes
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---


### CloudGcpDmIntegrationsLoadBalancingOutputReference <a name="CloudGcpDmIntegrationsLoadBalancingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsLoadBalancingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsLoadBalancingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---


### CloudGcpDmIntegrationsManagedKafkaOutputReference <a name="CloudGcpDmIntegrationsManagedKafkaOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsManagedKafkaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsManagedKafkaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsManagedKafka
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---


### CloudGcpDmIntegrationsMemCacheOutputReference <a name="CloudGcpDmIntegrationsMemCacheOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsMemCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsMemCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsMemCache
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---


### CloudGcpDmIntegrationsMemoryStoreOutputReference <a name="CloudGcpDmIntegrationsMemoryStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsMemoryStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsMemoryStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsMemoryStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---


### CloudGcpDmIntegrationsPubSubOutputReference <a name="CloudGcpDmIntegrationsPubSubOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsPubSubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsPubSubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsPubSub
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---


### CloudGcpDmIntegrationsRedisOutputReference <a name="CloudGcpDmIntegrationsRedisOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsRedisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsRedisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsRedis
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---


### CloudGcpDmIntegrationsRouterOutputReference <a name="CloudGcpDmIntegrationsRouterOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsRouterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsRouterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsRouter
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---


### CloudGcpDmIntegrationsRunOutputReference <a name="CloudGcpDmIntegrationsRunOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsRun
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---


### CloudGcpDmIntegrationsSpannerOutputReference <a name="CloudGcpDmIntegrationsSpannerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsSpannerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsSpannerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsSpanner
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---


### CloudGcpDmIntegrationsSqlOutputReference <a name="CloudGcpDmIntegrationsSqlOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsSqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsSqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsSql
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---


### CloudGcpDmIntegrationsStorageOutputReference <a name="CloudGcpDmIntegrationsStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---


### CloudGcpDmIntegrationsVirtualMachinesOutputReference <a name="CloudGcpDmIntegrationsVirtualMachinesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsVirtualMachinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsVirtualMachinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---


### CloudGcpDmIntegrationsVpcAccessOutputReference <a name="CloudGcpDmIntegrationsVpcAccessOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/cloudgcpdmintegrations"

cloudgcpdmintegrations.NewCloudGcpDmIntegrationsVpcAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpDmIntegrationsVpcAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpDmIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---



