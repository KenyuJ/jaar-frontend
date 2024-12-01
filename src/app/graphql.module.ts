// src/app/graphql.module.ts
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { environment } from '../environments/environment';

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.graphqlUrl || 'http://localhost:3000/graphql'
        })
      }),
      deps: [HttpLink]
    },
    // Reemplaza HttpClientModule con este proveedor
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class GraphQLModule {}