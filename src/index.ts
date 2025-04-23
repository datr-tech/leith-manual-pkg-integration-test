import { hopValidationSchemaCreateHop } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { endpointTypeValidationSchemaCreateEndpointType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { campaignTypeValidationSchemaCreateCampaignType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { attributeTypeValidationSchemaCreateAttributeType } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { organisationRoleValidationSchemaReadOrganisationRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { logger } from '@datr.tech/leith-common-logger';
import { common, persona } from '@datr.tech/parcel-model-schemas';
import {
  commonSchemaFieldBaseUrl,
  commonSchemaOptions,
} from '@datr.tech/parcel-model-schemas-common-fields';
import { hopModelSchema } from '@datr.tech/parcel-model-schemas-dolomite';
import { endpointModelSchema } from '@datr.tech/parcel-model-schemas-entity';
import {
  templateModelSchema,
  templateModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import {
  userAttributeModelSchema,
  userAttributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import {
  organisationModelSchema,
  organisationModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import {
  threadModelSchema,
  threadModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-proc';

const { commonSchemaFieldGroupFooter } = common;

logger.info({ commonSchemaFieldBaseUrl });
logger.info({ commonSchemaOptions });
logger.info({ hopModelSchema });
logger.info({ endpointModelSchema });
logger.info({ templateModelSchema });
logger.info({ templateModelSchemaOptions });
logger.info({ userAttributeModelSchema });
logger.info({ userAttributeModelSchemaOptions });
logger.info({ organisationModelSchema });
logger.info({ organisationModelSchemaOptions });
logger.info({ threadModelSchema });
logger.info({ threadModelSchemaOptions });
logger.info({ common });
logger.info({ commonSchemaFieldGroupFooter });
logger.info({ persona });
logger.info({ hopValidationSchemaCreateHop });
logger.info({ endpointTypeValidationSchemaCreateEndpointType });
logger.info({ campaignTypeValidationSchemaCreateCampaignType });
logger.info({ attributeTypeValidationSchemaCreateAttributeType });
logger.info({ organisationRoleValidationSchemaReadOrganisationRole });
