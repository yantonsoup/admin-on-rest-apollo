import Orders from '../queries/Orders';
import Events from '../queries/Events';
import mapResourceTypeToResolver from './mapResourceTypeToResolver';

export default function buildQuery(type, resource, params) {
  switch (resource) {
    case 'order':
      return Orders[mapResourceTypeToResolver(type, resource)](params);
    case 'event':
    return Events[mapResourceTypeToResolver(type, resource)](params);
      break;
    default:
  }
}
